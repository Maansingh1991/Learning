import os
import numpy as np
import pandas as pd
import csv

#from dask.dataframe.core import DataFrame

from flask import Flask,request


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello',methods=['GET', 'POST'])
    def hello():
        print(request.files['csv'])
        data=pd.read_excel(request.files['csv'])
        print(data)
        csv= CSVHandler()
        csv.operations(csv.read_excel(request.files['csv']))
        #csv.operations(csv.read_excel("C:/Users/manishchauhan/Desktop/Book1.xlsx"))
        csv.print_data_frame()
        #csv.write_excel()
        return 'Hello, World!'

    return app