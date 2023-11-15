from sqlalchemy import Column, ForeignKey, Integer, String

from database import Base


class PetInfoData(Base):
    __tablename__ = "pet_info"

    id = Column(Integer, primary_key=True, index=True)
    owner_name = Column(String)
    phone = Column(String)
    address = Column(String)
    pet_name = Column(String)
