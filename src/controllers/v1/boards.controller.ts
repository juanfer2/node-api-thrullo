import {
  Get,
  Res,
  Param,
  Body,
  JsonController,
  Post,
  Delete,
  Put,
  Authorized
} from "routing-controllers";
import { BoardsService } from "../../services/v1/boards.service";

@JsonController("/api/v1/boards")
class BoardController {
  constructor(private readonly boardsService: BoardsService) {}

  @Authorized()
  @Get("/")
  iceCreamList(@Res() response: any) {
    const boards = this.boardsService.getBoards();
    return boards;
  }
}

export default BoardController;
