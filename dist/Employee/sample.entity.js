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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleEntity = void 0;
const class_validator_1 = require("class-validator");
class SampleEntity {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SampleEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: 'Name cannot be empty' }),
    class_validator_1.Length(3, 10),
    __metadata("design:type", String)
], SampleEntity.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Length(3, 255),
    __metadata("design:type", String)
], SampleEntity.prototype, "description", void 0);
exports.SampleEntity = SampleEntity;
//# sourceMappingURL=sample.entity.js.map