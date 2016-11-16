awk '/latitudeE7|longitudeE7/' $1 | sed -e 's/\("\| \|:\|latitudeE7\|longitudeE7\|,\)//g' > locations.txt
