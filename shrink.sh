sed -n '0~3p' $1 | awk '/latitudeE7|longitudeE7/' | sed -e 's/\("\| \|:\|latitudeE7\|longitudeE7\|,\)//g' > locations.txt
