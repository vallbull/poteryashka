from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import models
import schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return "Welcome to poteryashka service"


@app.post("/register")
def register(id: int, user_info: schemas.PetInfoData, db: Session = Depends(get_db)):
    user_db = models.PetInfoData(**user_info.model_dump(), id=id)
    db.add(user_db)
    db.commit()
    return {"status": "ok"}


@app.post("/get_pet", response_model=schemas.PetInfoData)
def get_pet_info_by_id(id: int, db: Session = Depends(get_db)):
    db_user = db.query(models.PetInfoData).filter(models.PetInfoData.id == id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail=f"User with id {id} not found")
    return db_user
