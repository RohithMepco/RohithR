#include<iostream>
using namespace std;
int main()
{
        string word;int count=1;char t;
        cout<<"Enter the string\n";
        getline(cin,word);
        string editword=word;
        int n=word.size();
         for(int i=0;i<n;i++)
        {
                for(int j=i+1;j<n;j++)
                {
                        if(word[i]>word[j])
                        {
                                t=word[i];
                                word[i]=word[j];
                                word[j]=t;
                        }
                }
        }
        for(int i=0;i<n;i++)
        {
                for(int j=i+1;j<n;j++)
                {
                        if(word[i]==word[j])
                        {
                                count+=1;
                                i++;

                        }
                        else
                                break;
                }
        cout<<word[i]<<" occurs "<<count<<" times\n";
        count=1;

        }
}
