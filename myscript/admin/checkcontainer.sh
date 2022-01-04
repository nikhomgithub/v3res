CONTAINERS=$(echo "nikhom" | sudo docker container ls)

MYNGINX_V3=$(echo $CONTAINERS | grep -c mynginx_v3)
MYSERVER_33=$(echo $CONTAINERS | grep -c myserver_33)
MYSERVER_29=$(echo $CONTAINERS | grep -c myserver_29)
MYSERVER_27=$(echo $CONTAINERS | grep -c myserver_27)
MYSERVER_25=$(echo $CONTAINERS | grep -c myserver_25)
MYSERVER_1=$(echo $CONTAINERS | grep -c myserver_1)
MYSERVER_AUTH_V3=$(echo $CONTAINERS | grep -c myserver_auth_v3)
MYMONGO_AUTH_V3=$(echo $CONTAINERS | grep -c mymongo_auth_v3)

if [ $MYMONGO_AUTH_V3 -eq 0 -o $MYSERVER_AUTH_V3 -eq 0 ]; 
then cd ~/v3version2/server_auth && echo "nikhom" | sudo docker-compose up -d &> ~/v3version2/myscript/admin/server_auth.log
fi 

if [ $MYSERVER_1 -eq 0 ]; 
then cd ~/v3version2/server_1 && echo "nikhom" | sudo docker-compose up -d &> ~/v3version2/myscript/admin/server_1.log
fi 

if [ $MYSERVER_25 -eq 0 ]; 
then cd ~/v3version2/server_25 && echo "nikhom" | sudo -S docker-compose up -d &> ~/v3version2/myscript/admin/server_25.log  
fi 

if [ $MYSERVER_27 -eq 0 ]; 
then cd ~/v3version2/server_27 && echo "nikhom" | sudo -S docker-compose up -d &> ~/v3version2/myscript/admin/server_27.log
fi 

if [ $MYSERVER_29 -eq 0 ]; 
then cd ~/v3version2/server_29 && echo "nikhom" | sudo -S docker-compose up -d &> ~/v3version2/myscript/admin/server_29.log
fi 

if [ $MYSERVER_33 -eq 0 ]; 
then cd ~/v3version2/server_33 && echo "nikhom" | sudo -S docker-compose up -d &> ~/v3version2/myscript/admin/server_33.log
fi 

if [ $MYNGINX_V3 -eq 0 ]; 
then cd ~/v3version2/nginx && echo "nikhom" | sudo -S docker-compose up -d &> ~/v3version2/myscript/admin/nginx.log
fi 
