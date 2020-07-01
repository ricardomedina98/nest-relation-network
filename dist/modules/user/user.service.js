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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const typeorm_1 = require("@nestjs/typeorm");
let UserService = class UserService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
    }
    async get(id) {
        if (!id) {
            throw new common_1.BadRequestException('id must be sent');
        }
        const user = await this._userRepository.findOne(id, {
            where: {
                status: 'ACTIVE'
            }
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async getAll() {
        const users = await this._userRepository.find({
            where: {
                status: 'ACTIVE'
            }
        });
        return users;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepositry)),
    __metadata("design:paramtypes", [user_repository_1.UserRepositry])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map