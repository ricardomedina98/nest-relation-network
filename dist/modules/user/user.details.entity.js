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
exports.UserDetails = void 0;
const typeorm_1 = require("typeorm");
let UserDetails = class UserDetails extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], UserDetails.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserDetails.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false, name: 'first_name' }),
    __metadata("design:type", String)
], UserDetails.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false, name: 'second_name' }),
    __metadata("design:type", String)
], UserDetails.prototype, "secondName", void 0);
UserDetails = __decorate([
    typeorm_1.Entity('users_details')
], UserDetails);
exports.UserDetails = UserDetails;
//# sourceMappingURL=user.details.entity.js.map