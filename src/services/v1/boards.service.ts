import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { BoardRepository } from "../../repositories/v1/board.repository";

@Service()
export class BoardsService {
  constructor(@InjectRepository() private boardRepository: BoardRepository) {}

  async getBoards(): Promise<any> {
    try {
      const boards = await this.boardRepository.find({});
      return boards;
    } catch (error) {
      return error;
    }
  }
}
