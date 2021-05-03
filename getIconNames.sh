echo "export const names = [" > src/components/Icon/IconName.ts &&
cd src/components/Icon/Icons &&
names=()
for name in * ; do step_1="${name/Iconoteka/}"; step_2="${step_1/Fill/}"; step_3="${step_2/Line/}"; cleanName="${step_3/.tsx/}"; names+=("$cleanName"); done
uniqueNames=($(printf "%s\n" "${names[@]}" | sort -u))
printf "'%s',\n" "${uniqueNames[@]}" >> ../IconName.ts
sed -i '$ d' ../IconName.ts &&
truncate -s-2 ../IconName.ts &&
echo -e "\n] as const;\n" >> ../IconName.ts &&
echo "export type IconName = typeof names[number];" >> ../IconName.ts &&
echo -e "\nexport default IconName;" >> ../IconName.ts
