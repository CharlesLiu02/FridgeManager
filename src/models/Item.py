from asyncio.windows_events import NULL


class Item():
    def __init__(self):
        self.uuid = ''
        self.name = ''
        self.category = None
        self.nut_info = None
        self.location = None
        self.quantity = 0
        self.expiration_date = None
    
    def get_uuid(self):
        return self.uuid
    
    def get_name(self):
        return self.name
    
    def get_category(self):
        return self.category
    
    def get_nut_info(self):
        return self.nut_info

    def get_location(self):
        return self.location
    
    def get_quantity(self):
        return self. quantity
    
    def get_expiration_date(self):
        return self.expiration_date

    def set_uuid(self, uuid):
        self.uuid = uuid
    
    def set_name(self, name):
        self.name = name
    
    def set_category(self, category):
        self.category = category
    
    def set_nut_info(self, nut_info):
        self.nut_info = nut_info
    
    def set_location(self, location):
        self.location = location
    
    def set_quantity(self, quantity):
        self.quantity = quantity

    def set_expiration_date(self, expiration_date):
        self.expiration_date = expiration_date
    
    