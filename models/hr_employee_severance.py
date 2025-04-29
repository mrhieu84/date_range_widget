from odoo import models, fields, api
from odoo.exceptions import UserError,ValidationError
from datetime import date
from dateutil.relativedelta import relativedelta
import logging
_logger = logging.getLogger(__name__)
import json
from datetime import datetime, timedelta,time
from pytz import timezone, utc
import pytz
from .. import defs

class SeveranceEmployee(models.Model):
    _name = "hr.severance.payment"
    severance_date = fields.Date("Payment Date")

    employee_id = fields.Many2one('hr.employee', string="Employee", ondelete='cascade')

    date_range = fields.Char(string="Date Range", store=True)

    reason = fields.Char("Reason")



    


    
