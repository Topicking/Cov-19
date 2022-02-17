from flask import Flask
from flask import jsonify
from flask import render_template
from flask import request
import json
from flask import json
import utils
import string


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")

#世界地图
@app.route("/world")
def get_c2_data():
    data = utils.get_c2_data()
    confirm = []
    nowconfirm = []
    heal = []
    dead = []
    for tup in data:
        confirm.append({"name":tup[0],"value":int(tup[1])})
        nowconfirm.append({"name":tup[0],"value":int(tup[2])})
        heal.append({"name":tup[0],"value":int(tup[3])})
        dead.append({"name":tup[0],"value":int(tup[4])})
    return jsonify({"confirm": confirm , "nowconfirm":nowconfirm,"heal":heal,"dead":dead})

#中国地图
@app.route("/china")
def get_map_china():
    data = utils.get_china_c2_data()
    confirm = []
    nowconfirm = []
    heal = []
    dead = []
    for tup in data:
        confirm.append({"name": tup[0], "value": int(tup[1])})
        nowconfirm.append({"name": tup[0], "value": int(tup[2])})
        heal.append({"name": tup[0], "value": int(tup[3])})
        dead.append({"name": tup[0], "value": int(tup[4])})
    return jsonify({"confirm": confirm, "nowconfirm": nowconfirm, "heal": heal, "dead": dead})
#省份地图
@app.route('/city/<name>')
def get_city_data(name):
    data = utils.get_city_data(name)
    city = []
    confirm = []
    heal=[]
    dead=[]
    nowconfirm=[]
    for a, b,c,d in data[0:]:
        city.insert(0,a)  # a是datatime类型
        confirm.insert(0,b)
        x = b - c - d
        if (x >= 0):
            nowconfirm.insert(0, x)
        else:
            nowconfirm.insert(0, 0)
        heal.insert(0, c)
        dead.insert(0, d)

    return jsonify({"city": city, "confirm": confirm,"nowconfirm":nowconfirm,"heal":heal,"dead":dead})

@app.route("/province/<name>")
def get_province_data(name):
    data = utils.get_province_data(name)
    return jsonify({"confirm": int(data[0]), "heal": int(data[1]), "dead": int(data[2]),"nowconfirm":int(data[0])-int(data[1])-int(data[2]),"suspect": int(data[3]),"daedrate":int(data[1])/ int(data[0])*100})


@app.route("/province/history/<name>")
def get_province_data1(name):
    data = utils.get_province_data1(name)
    day = []
    confirmed = []
    heal = []
    dead = []
    for a, b, d, e in data[0:]:
        day.append(a.strftime("%m-%d"))
        confirmed.append(b)
        heal.append(d)
        dead.append(e)
    return jsonify({"days": day, "confirmed": confirmed, "heal": heal, "dead": dead})



@app.route("/province/now/<name>")
def get_province_data3(name):
    data = utils.get_province_now(name)
    day = []
    nowconfirmed = []
    for a, b,c,d,e in data[0:]:
        day.append(a.strftime("%m-%d"))
        nowconfirmed.append(b-c-d)
    return jsonify({"days": day, "confirmed": nowconfirmed})

@app.route("/c2/<name>")
def get_map_data(name):
    res = []
    if(name=="安徽省"):
        for tup in utils.get_map_data(name):
            res.append({"name": tup[0]+"市", "value": tup[1]})
    elif(name=="辽宁省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0]+"市", "value": tup[1]})
    elif (name == "河北省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "山西省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "江苏省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "浙江省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "福建省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "江西省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "山东省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "河南省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "江西省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "广东省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "陕西省"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "广西壮族自治区"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "宁夏回族自治区"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    elif (name == "西藏自治区"):
        for tup in utils.get_map_data(name):res.append({"name": tup[0] + "市", "value": tup[1]})
    else:
        for tup in utils.get_map_data(name):res.append({"name": tup[0], "value": tup[1]})

    return jsonify({"data": res})

#各国趋势
@app.route('/<name>')
def get_country_data(name):
    data = utils.get_country_data1(name)
    day = []
    confirmed = []
    heal = []
    dead = []
    increase_confirmed=[]
    increase_heal=[]
    increase_dead=[]
    heal_rate=[]
    dead_rate = []

    nowconfirmed = []
    for a, c, d, e,f,g,h in data[0:]:
        day.append(a.strftime("%m-%d"))
        confirmed.append(c)
        heal.append(d)
        dead.append(e)
        nowconfirmed.append(c-d-e)
        increase_confirmed.append(f)
        increase_heal.append(g)
        increase_dead.append(h)
        heal_rate.append(round((d/c*100),2))
        dead_rate.append(round((e/c*100),2))

    return jsonify({"day": day, "confirmed": confirmed, "heal": heal, "dead": dead, "increase_confirmed":increase_confirmed, "increase_heal":increase_heal, "increase_dead":increase_dead,"heal_rate":heal_rate,"dead_rate":dead_rate,"nowconfirmed":nowconfirmed})


@app.route("/countryname")
def get_country_name():
    data = utils.get_country_name()
    country = []
    for a in data[0:]:
        country.append(a)
    return jsonify({"country": country})



@app.route("/continentName")
def get_continent_name():
    data = utils.get_continent_name()
    continent = []
    for a in data[0:]:
        continent.append(a)
    return jsonify({"country": continent})


@app.route("/country")
def get_country():
    data = utils.get_country_data()
    day = []
    confirmed = []
    heal = []
    dead = []
    for a, c, d, e in data[0:]:
        day.append(a.strftime("%m-%d"))
        confirmed.append(c)
        heal.append(d)
        dead.append(e)
    return jsonify({"day": day, "confirmed": confirmed, "heal": heal, "dead": dead})


# @app.route('/continent')
# def continent_page():
#     return render_template("continent.html")



@app.route('/continent/<name>')
def get_continent_country(name):
    data = utils.get_continent_country(name)
    country = []
    for a in data[0:]:
        country.append(a)
    return jsonify({"country": country})



#中国详细地图


@app.route("/c1")
def get_c1_data():
    data = utils.get_c1_data()
    return jsonify({"confirm":data[0],"suspect":data[1],"heal":data[2],"dead":data[3],"nowconfirm":data[0]-data[2]-data[3]})



@app.route("/c1/2")
def get_c1_data2():
    data = utils.get_c1_data2()
    return jsonify({"foreignconfirm":int(data[0])})


@app.route("/c2")
def get_china_c2_data():
    data = utils.get_china_c2_data()
    confirm = []
    nowconfirm = []
    heal = []
    dead = []
    for tup in data:
        confirm.append({"name": tup[0], "value": int(tup[1])})
        nowconfirm.append({"name": tup[0], "value": int(tup[2])})
        heal.append({"name": tup[0], "value": int(tup[3])})
        dead.append({"name": tup[0], "value": int(tup[4])})
    return jsonify({"confirm": confirm, "nowconfirm": nowconfirm, "heal": heal, "dead": dead})

@app.route("/l1")
def get_l1_data():
    data = utils.get_l1_data()
    day,confirm,suspect,heal,dead = [],[],[],[],[]
    for a,b,c,d,e in data[7:]:
        day.append(a.strftime("%m-%d")) #a是datatime类型
        confirm.append(b)
        suspect.append(c)
        heal.append(d)
        dead.append(e)
    return jsonify({"day":day,"confirm": confirm, "suspect": suspect, "heal": heal, "dead": dead})

@app.route("/l2")
def get_l2_data():
    data = utils.get_l2_data()
    days, confirm_add, suspect_add, heal_add, dead_add = [], [], [],[],[]
    for a, b, c, d, e in data[7:]:
        days.append(a.strftime("%m-%d"))  # a是datatime类型
        confirm_add.append(b)
        suspect_add.append(c)
        heal_add.append(d)
        dead_add.append(e)
    return jsonify({"days": days, "confirm_add": confirm_add, "suspect_add": suspect_add, "heal_add": heal_add, "dead_add": dead_add})

@app.route("/r1")
def get_r1_data():
    data = utils.get_r1_data()
    city = []
    confirm = []
    for k,v in data:
        city.append(k)
        confirm.append(int(v))
    return jsonify({"city": city, "confirm": confirm})


#搜索栏

if __name__ == '__main__':
    app.run()
