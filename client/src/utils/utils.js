import moment from "moment";

export const updatedOnDateFormatter = (date) => {
    if (date !== undefined && date !== '' && date !== '-' && date !== null) {
        var selectedDate = moment(date).format("DD-MMM-YY HH:mm:ss")
        return selectedDate;
    }
    return date;
}