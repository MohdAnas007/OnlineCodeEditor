#include<iostream>
#include<vector>
#include<map>


using namespace std;
int main(){

    vector<int>v={1,2,3,4};
    map<int,int>mp;

    int sum=0;
    for(int i=0;i<v.size();i++){
        sum+=v[i];
        mp[v[i]]++;

        
    }
    cout<<sum<<endl;
    for(auto &it:mp){
        cout<<it.first<<" "<<it.second<<endl;

    }






    return 0;

}