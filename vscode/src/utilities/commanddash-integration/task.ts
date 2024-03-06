import { DartCLIClient } from "./dart-cli-client";
const client = new DartCLIClient();
    const task = client.newTask();
    // Handle client side steps during task processing. 
    task.onProcessStep('random_data_kind', (message) => {
        /// any complex interaction to come up with response data.
        const additionalData = { value: "unique_value_2" };
    
        // Respond back to CLI in every case. Either with data if required or just a confirmation.
        client.sendProcessStepResponse(message.id, additionalData);
    
        // /// [Optional] Listeners are disposed on their own once the task is completed. But if some task is continued for entire lifecycle, we may disconnect the listeners if the one-time process step is handled.
        // client.eventEmitter.removeListener(`get_additional_data_already_cached_files`, handler);
        });

    try {
        /// Request the client to process the task and handle result or error
        const response = await task.run({ kind: "random_task", data: {current_embeddings: {}} });
        console.log("Processing completed: ", response);
    } catch (error) {
        console.error("Processing error: ", error);
    }
export class Task {
    private taskId: number;
    private dartClient: DartCLIClient;
    private handlers: Map<string, (message: any) => void> = new Map();
  
    constructor(dartClient: DartCLIClient, taskId: number) {
      this.dartClient = dartClient;
      this.taskId = taskId;
    }
  
    public onProcessStep(kind: string, handler: (message: any) => void) {
      const eventName = `process_step_${kind}_${this.taskId}`;
      this.handlers.set(eventName, handler);
      this.dartClient.eventEmitter.on(eventName, handler);
    }
  
    public async run(params: any = {}): Promise<any> {
      try {
        const result = await this.dartClient.processTask(this.taskId, params);
        // Task completed successfully
        this.dispose();
        return result;
      } catch (error) {
        // Task encountered an error
        this.dispose();
        throw error;
      }
    }
  
    private dispose() {
      // Remove all event listeners associated with this task
      this.handlers.forEach((handler, eventName) => {
        this.dartClient.eventEmitter.removeListener(eventName, handler);
      });
    }
  }