from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext import declarative
from sqlalchemy.orm import  sessionmaker, relationship
import logging
logging.basicConfig()
logger = logging.getLogger('sqlalchemy.engine')
logger.setLevel(logging.DEBUG)


Base = declarative_base()

class User(Base):
    __tablename__ = "User"
    
    id = Column('id', Integer, primary_key = True)
    username = Column('user_name',String(20), unique = True)
    
engine =  create_engine("mysql://root:password@localhost/learning")    
Base.metadata.create_all(bind = engine)


Session = sessionmaker(bind= engine)


session = Session()

user = User()
user.id = 2
user.username = "alicaasdsdsdase"

session.add(user)
session.commit()


session.close()


