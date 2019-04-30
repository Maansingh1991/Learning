'''
Reading and Writing file to CSV


'''
import numpy as np
import pandas as pd
import csv
from dask.dataframe.core import DataFrame



class CSVHandler:
    
    dataFrame = ''
    
        
    def read_excel(self, path, head=None):
        return pd.read_excel(path)

        
    def operations(self, df):
        df['Add'] = df.apply(lambda x: x['A'] + x['B'], axis=1)
        df['Subtract'] = df.apply(lambda x: x['A'] - x['B'], axis=1)
        df['Multiply'] = df.apply(lambda x: x['A'] * x['B'], axis=1)
        df['Division'] = df.apply(lambda x: x['A'] / x['B'], axis=1)
        
        self.dataFrame= df
        
    def print_data_frame(self):
        print(self.dataFrame)  
        
    def write_excel(self):
        self.dataFrame.to_excel("C:/Users/manishchauhan/Desktop/Book2.xlsx")
                 
                 
        
            
 

if __name__ == "__main__": 
    csv= CSVHandler()
    csv.operations(csv.read_excel("C:/Users/manishchauhan/Desktop/Book1.xlsx"))
    csv.print_data_frame()
    csv.write_excel()
  