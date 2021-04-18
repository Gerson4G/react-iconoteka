echo "export type IconName =" > src/components/Icon/IconName.ts &&
cd src/components/Icon/Icons &&
for name in * ; do echo "'${name/Iconoteka/}' |" ; done >> ../IconName.ts &&
sed -i '$ d' ../IconName.ts &&
truncate -s-3 ../IconName.ts &&
echo ";" >> ../IconName.ts &&
echo -e "\nexport default IconName;" >> ../IconName.ts