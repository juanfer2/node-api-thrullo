import { EntityRepository, Repository } from "typeorm";
import { Board } from "../../models/v1/board.model";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
