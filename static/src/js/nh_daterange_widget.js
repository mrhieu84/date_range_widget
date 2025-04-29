/** @odoo-module **/

import { session } from "@web/session";
import { standardWidgetProps } from "@web/views/widgets/standard_widget_props";
import { Component,onMounted, onWillUpdateProps, useRef } from "@odoo/owl";
import { registry } from "@web/core/registry";
import {CharField, charField} from "@web/views/fields/char/char_field"
 class DateRangeWidget extends CharField {
   setup(){
            super.setup();
            this.startDateInput = useRef('start-date');
            this.endDateInput = useRef('end-date');
            onMounted(()=>{
                this._render();
            });

   }


   get formattedValue() {
        return this.props.record.data[this.props.name];
    }


     _render() {
        if (!this.props.readonly) {
            const value = this.props.value || '';
            const dates = value.split(' ~ ');
            this.startDate = dates[0] || '';
            this.endDate = dates[1] || '';

        } 
     
    }

    _onStartDateChange(event) {
        this.startDate = event.target.value;
        
        this._updateValue();
    }

    _onEndDateChange(event) {
        this.endDate = event.target.value;
        this._updateValue();
    }

    _updateValue() {
      
        if (!this.startDate || !this.endDate) {
            console.log('Invalid date range input');
            return;
        }

        const newValue = this.startDate + ' ~ ' + this.endDate;
       this.props.record.update({[this.props.name]:newValue})
        
    }


}

DateRangeWidget.template = "hr_plus.DateRangeWidget"
export const dateRangeWidget = {
    ...charField,
    component: DateRangeWidget
} 


registry.category("fields").add("nh_daterange", dateRangeWidget);
