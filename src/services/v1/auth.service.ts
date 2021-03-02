import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../../repositories/v1/user.repository";
import jwt from "jsonwebtoken";
import logger from "../../utils/logger/logger.util";

@Service()
export class AuthService {
  private PRIVATE_KEY = "ñhpf98q34yp9rqoiar";
  private expirationDate = 24 * 50 * 60;
  constructor(@InjectRepository() private authRepository: UserRepository) {}

  async Register(inputData: any): Promise<any> {
    try {
      inputData.password = await this.authRepository.encryptPassword(inputData.password);

      const user = await this.authRepository.save(inputData);
      user.token = await this.generateWebToken(user.id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async verifyToken(token: string): Promise<any> {
    const tokenUser = await jwt.verify(token, this.PRIVATE_KEY);

    if (tokenUser) {
      return tokenUser;
    }

    return null;
  }

  async login(inputData: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        email: inputData.email
      });
      if (user) {
        const currentPassword: string = user.password;
        const userIsValid = await this.authRepository.comparedPassword(
          inputData.password,
          currentPassword
        );

        if (userIsValid) {
          user.token = await this.generateWebToken(user.id);
          return user;
        } else {
          return { message: "User or password is not valid" };
        }
      } else {
        return { message: "User or password is not valid" };
      }
      // return user
    } catch (error) {
      return error;
    }
  }

  async generateWebToken(id: number): Promise<any> {
    try {
      const token = await jwt.sign({ id }, this.PRIVATE_KEY, {
        expiresIn: this.expirationDate
      });
      return token;
    } catch (error) {
      return error;
    }
  }
}
