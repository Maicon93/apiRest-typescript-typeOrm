import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/subjectController";
import { ApiError, BadRequestError, UnauthorizedError } from "./helpers/api-errors";

const routes = Router()

routes.get('/', async (req, res) => {

  throw new UnauthorizedError('Erro lançado dentro do try')
  return res.json('ok')
})

routes.post('/subject', new SubjectController().create)
routes.get('/room', new RoomController().list)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)

export default routes