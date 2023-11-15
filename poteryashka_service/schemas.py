from pydantic import BaseModel


class Id(BaseModel):
    id: int


class PetInfoData(BaseModel):
    owner_name: str
    phone: str
    address: str
    pet_name: str

    class Config:
        orm_mode = True


class PetInfoDataDBSchema(PetInfoData):
    id: int

