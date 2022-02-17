import time
import pymysql

def get_conn():
    """
    :return: 连接，游标
    """
    # 创建连接
    conn = pymysql.connect(host="rm-2ze2r9sl205oa11nu7o.mysql.rds.aliyuncs.com",
                           user="username",
                           password="123456789",
                           db="cov",
                           charset="utf8")
    # 创建游标
    cursor = conn.cursor()# 执行完毕返回的结果集默认以元组显示
    return conn, cursor

def close_conn(conn, cursor):
    cursor.close()
    conn.close()

def query(sql,*args):
    """
    封装通用查询
    :param sql:
    :param args:
    :return: 返回查询到的结果，((),(),)的形式
    """
    conn, cursor = get_conn()
    cursor.execute(sql,args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

#各国数据
def get_c2_data():
    """
    :return:  返回世界各国数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据
    # sql = "select provinceName,sum(confirmedCount) from world_map " \
    #       "where now_time=(select now_time from world_map " \
    #       "order by now_time desc limit 1) " \
    #       "group by provinceName"
    sql = "select country,confirmed,(confirmed - heal - dead),heal,dead from dxyarea where exists(select 1 from(select country, max(update_time) as update_time from dxyarea group by country) x where x.country = dxyarea.country and x.update_time = dxyarea.update_time)"
    res = query(sql)
    return res
#中国地图数据

def get_map_china():
    """
    :return:  返回各省数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select province,sum(confirm) from details " \
          "where update_time=(select update_time from details " \
          "order by update_time desc limit 1) " \
          "group by province"
    res = query(sql)
    return res

def get_china_c2_data():
    """
    :return:  返回各省数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select province,sum(confirm),sum(confirm - heal - dead),sum(heal),sum(dead) from details " \
          "where update_time=(select update_time from details " \
          "order by update_time desc limit 1) " \
          "group by province "
    res = query(sql)
    return res


#各省份地图左1
def get_city_data(str):
    sql = "select city,city_confirmed ,city_cured,city_dead from china_history where province='"+str+"' and  " \
          "updateTime=(select updateTime from china_history where province='"+str+"' order by updateTime desc limit 1)" \
          "order by city_confirmed desc "
    res = query(sql)
    return res
#各省份地图右1
def get_province_now(str):
    sql = 'select updateTime,province_confirmed,province_cured,province_dead ,province_suspected from province_history ' \
          'where province="' + str + '" order by updateTime asc '
    res = query(sql)
    return res
#各省份地图右2
def get_province_data1(str):
    sql = 'select updateTime,province_confirmed,province_cured,province_dead from province_history ' \
          'where province="' + str + '"  order by updateTime'
    res = query(sql)
    return res
#各省份地图中1
def get_province_data(str):
    sql = 'select province_confirmed,province_cured,province_dead ,province_suspected from province_history ' \
          'where province="' + str + '"  order by updateTime desc'
    res = query(sql)
    return res[0]
#各省份地图中2
def get_map_data(str):
    """
    :return:  返回各省数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据

    sql = "select city,city_confirmed from china_history where province ='"+str+"' and city not in('境外输入','地区待确认','外地来京','省级(湖北输入)') and updateTime=(select updateTime from china_history where province ='"+str+"'  order by updateTime desc limit 1)"
    res = query(sql)
    return res
#各国趋势
def get_country_name():
    """
    :return:  返回最近的20条热搜
    """
    sql = 'select DISTINCT country from dxyarea '
    res = query(sql)
    return res

def get_country_data( ):
    """
    :return:
    """
    sql = 'select update_Time,confirmed,heal,dead from dxyarea where country="美国" order by update_Time '
    res = query(sql)
    return res

def get_country_data1(str):
    """
    """
    sql = 'select update_Time,confirmed,heal,dead,increase_confirmed,increase_heal,increase_dead from dxyarea ' \
          'where country="'+str+'" order by update_Time '
    res = query(sql)
    return res

def get_continent_country(str):
    """
    :return:  返回最近的20条热搜
    """
    sql = 'select DISTINCT country from dxyarea ' \
          'where continentEnglishName="'+str+'" '
    res = query(sql)
    return res

def get_continent_name():
    sql = 'select DISTINCT continentEnglishName from dxyarea '
    res = query(sql)
    return res



#中国详细地图
def get_c1_data():
    """
    :return: 返回大屏div id=c1 的数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select confirm ,suspect,heal,dead from history " \
          "where ds=(select ds from history order by ds desc limit 1) "

    res = query(sql)
    return res[0]


def get_c1_data2():
    """
    :return:  返回各省数据
    """
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select sum(confirm) from details " \
          "where update_time=(select update_time from details " \
          "order by update_time desc limit 1) and city='境外输入' "
    res = query(sql)
    return res[0]





def get_l1_data():
    sql = "select ds,confirm,suspect,heal,dead from history"
    res = query(sql)
    return res


def get_l2_data():
    sql = "select ds,confirm_add,suspect_add,heal_add,dead_add from history"
    res = query(sql)
    return res


def get_r1_data():
    """
    :return:  返回非湖北地区城市确诊人数前5名
    """
    sql = 'SELECT city,confirm FROM ' \
          '(select city,confirm from details  ' \
          'where update_time=(select update_time from details order by update_time desc limit 1) ' \
          'and province not in ("湖北","北京","上海","天津","重庆","香港","台湾") ' \
          'union all ' \
          'select province as city,sum(confirm) as confirm from details  ' \
          'where update_time=(select update_time from details order by update_time desc limit 1) ' \
          'and province in ("北京","上海","天津","重庆","香港","台湾")group by province) as a ' \
          'ORDER BY confirm DESC LIMIT 5'
    res = query(sql)
    return res


if __name__ == "__main__":
    print(get_c2_data())