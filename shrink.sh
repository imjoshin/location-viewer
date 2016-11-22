awk '/latitudeE7|longitudeE7/' $1 | sed -e 's/\("\| \|:\|latitudeE7\|longitudeE7\|,\)//g' | awk 'NR % 6 == 0 || NR % 6 == 1' > locations.txt
