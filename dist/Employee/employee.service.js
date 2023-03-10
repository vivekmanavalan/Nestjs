"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_repository_1 = require("./employee.repository");
const event_emitter_1 = require("@nestjs/event-emitter");
const decorators_1 = require("@nestjs/event-emitter/dist/decorators");
let EmployeeService = class EmployeeService {
    constructor(employeeRepo, eventEmitter) {
        this.employeeRepo = employeeRepo;
        this.eventEmitter = eventEmitter;
    }
    async createEmployee(data) {
        console.log('employee service');
        const res = await this.employeeRepo.save(data);
        this.eventEmitter.emit('created.employee', {
            id: res.id,
            name: res.name,
            description: res.description,
        });
        return res;
    }
    async getAllEmployees() {
        this.eventEmitter.emit('employees.requested', {
            message: 'Employees data is being received'
        });
        return await this.employeeRepo.getAllEmployees();
    }
    async getById(id) {
        return await this.employeeRepo.findOne(id);
    }
    async deleteById(id) {
        return await this.employeeRepo.delete(id);
    }
    handleCreateEvent(payload) {
        console.log('From emitted event', payload);
    }
    handleGetAllRequest(payload) {
        console.log(payload);
    }
};
__decorate([
    (0, decorators_1.OnEvent)('created.employee'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmployeeService.prototype, "handleCreateEvent", null);
__decorate([
    (0, decorators_1.OnEvent)('employees.requested'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmployeeService.prototype, "handleGetAllRequest", null);
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_repository_1.EmployeeRepository)),
    __metadata("design:paramtypes", [employee_repository_1.EmployeeRepository,
        event_emitter_1.EventEmitter2])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map