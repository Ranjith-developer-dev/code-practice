// SOLID Principles in NestJS

// 1. SRP - Single Responsibility Principle
// Each class has one reason to change

// user.controller.ts
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}

// user.service.ts
@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  getUserById(id: string) {
    return this.userRepo.findById(id);
  }
}

// 2. OCP - Open/Closed Principle
// Extend behavior via strategy pattern without modifying core logic

// payment.strategy.ts
export interface PaymentStrategy {
  pay(amount: number): string;
}

// card.strategy.ts
@Injectable()
export class CardPayment implements PaymentStrategy {
  pay(amount: number) {
    return `Paid ${amount} via Card`;
  }
}

// upi.strategy.ts
@Injectable()
export class UpiPayment implements PaymentStrategy {
  pay(amount: number) {
    return `Paid ${amount} via UPI`;
  }
}

// payment.service.ts
@Injectable()
export class PaymentService {
  constructor(@Inject('PAYMENT_STRATEGY') private payment: PaymentStrategy) {}

  makePayment(amount: number) {
    return this.payment.pay(amount);
  }
}

// 3. LSP - Liskov Substitution Principle
// Subclasses should be usable in place of parent classes

export abstract class NotificationService {
  abstract send(message: string): void;
}

@Injectable()
export class EmailService extends NotificationService {
  send(message: string) {
    console.log(`Email: ${message}`);
  }
}

@Injectable()
export class SmsService extends NotificationService {
  send(message: string) {
    console.log(`SMS: ${message}`);
  }
}

function notifyUser(service: NotificationService) {
  service.send('Hello!');
}

// 4. ISP - Interface Segregation Principle
// Break large interfaces into smaller, specific ones

interface Creatable {
  create(): void;
}

interface Deletable {
  delete(): void;
}

interface Blockable {
  block(): void;
}

class ReadOnlyUser implements Creatable {
  create() {
    console.log('Create only');
  }
}

// 5. DIP - Dependency Inversion Principle
// Depend on abstractions, not concrete classes

// log.service.ts
export interface LoggerService {
  log(message: string): void;
}

// console.logger.ts
@Injectable()
export class ConsoleLogger implements LoggerService {
  log(message: string) {
    console.log(`[Console] ${message}`);
  }
}

// app.module.ts
providers: [
  {
    provide: 'LoggerService',
    useClass: ConsoleLogger,
  },
],

// task.service.ts
@Injectable()
export class TaskService {
  constructor(@Inject('LoggerService') private logger: LoggerService) {}

  runTask() {
    this.logger.log('Task started');
  }
}
