
module.exports = {
    mutipleDataUseHandlebars: (data) => {
        return data.map((dt) => dt.toObject());
    },
    dataUseHandlebars: (data) => {
        return data.toObject();
    }

}