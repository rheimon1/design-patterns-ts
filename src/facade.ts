interface ISubsystem1 {
  operation1: () => string;
  operationN: () => string;
}

interface ISubsystem2 {
  operation2: () => string;
  operationZ: () => string;
}

/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */

class Facade {
  constructor(
    protected readonly subsystem1: ISubsystem1, 
    protected readonly subsystem2: ISubsystem2
  ) {}

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation2();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();
    return result;
  }
}

class Subsystem1 implements ISubsystem1 {
  public operation1 (): string {
    return 'Subsystem1: Ready!\n';
  };

  public operationN (): string {
    return 'Subsystem1: Go!\n';
  };
}

class Subsystem2 implements ISubsystem2 {
  public operation2 (): string {
    return 'Subsystem2: Get ready!\n';
  };

  public operationZ (): string {
    return 'Subsystem2: Fire!\n';
  };
}

(() => {
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();
  const facade = new Facade(subsystem1, subsystem2);
  console.log(`Facade operation\n\n${facade.operation()}`)
})();

