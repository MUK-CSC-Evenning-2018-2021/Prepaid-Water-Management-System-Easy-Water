#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char* tokenize(char* data);
char* decrypt(char* token);
char* codes;
double unit = 0.00;
double units = 0.00;
int false = 0, true = 1;
char* code;
char UsedTokens[25][17]={"1280BC00AD5DA59A"};
_Bool usedToken(char* token) {
  int i,j;
  for(i=0;i<25;i++) {
    for(j=0;j<17;j++) printf("\n\n Token[%d][%d]: %c", i,j,UsedTokens[i][j]);
    getchar();
  if(UsedTokens[i] == 0){
  }
    if(strcmp(UsedTokens[i], token) == 0) {
    for(j=0;j<17;j++) printf("\n\n Token[%d][%d]: %c", i,j,UsedTokens[i][j]);
    printf("\n\nToken %d: %s", i, UsedTokens[i]);
      return true;
    }
  }
  return false;
}
int main()
{
    char* code = (char*)"AD5DBC065123456D";
    codes = tokenize(code);
    printf("Code: %s", code);
    printf("\nToken: %s", codes);
    printf("\nDecrypted: %s", decrypt(codes));
    for(int i=0; i<25; i++) {
        for(int j = 0; j<17;j++){
            UsedTokens[i][j] = '\0';
        }
    }
    usedToken("1280BC00AD5DA59A");
    return 0;
}
/* Javascript Code */
//function splitString(str) {
//    var middle = Math.ceil(str.length / 2);
//    var s1 = str.slice(0, middle);
//    var s2 = str.slice(middle);
//    return s1 + " " + s2;
//};

char finalString[17], decoded[17];
char* tokenize(char* data)
{
    int len = strlen(data);
    int len1 = len / 2;
    int len2 = len - len1;
    int len3 = len1 / 2;
    int len4 = len1 - len3;
    int len5 = len2 / 2;
    int len6 = len2 - len5;
    char *s3 = (char*)malloc(len3 + 1);
    memcpy(s3, data, len3);
    s3[len3] = '\0';
    char* s4 = (char*)malloc(len4 + 1);
    memcpy(s4, data + len3, len4);
    s4[len4] = '\0';
    char* s5 = (char*)malloc(len5 + 1);
    memcpy(s5, data + len3 + len4, len5);
    s5[len5] = '\0';
    char* s6 = (char*)malloc(len6 + 1);
    memcpy(s6, data + len3 + len4 + len5, len6);
    s6[len6] = '\0';
    strcat(finalString, s5);
    strcat(finalString, s3);
    strcat(finalString, s6);
    strcat(finalString, s4);
    free(s4);
    free(s5);
    free(s6);
    free(s3);
    return (char*) &*finalString;
}

char* decrypt(char* token)
{
    int len = strlen(token);
    int len1 = len / 2;
    int len2 = len - len1;
    int len3 = len1 / 2;
    int len4 = len1 - len3;
    int len5 = len2 / 2;
    int len6 = len2 - len5;
    char *s3 = (char*)malloc(len3 + 1);
    memcpy(s3, token, len3);
    s3[len3] = '\0';
    char* s4 = (char*)malloc(len4 + 1);
    memcpy(s4, token + len3, len4);
    s4[len4] = '\0';
    char* s5 = (char*)malloc(len5 + 1);
    memcpy(s5, token + len3 + len4, len5);
    s5[len5] = '\0';
    char* s6 = (char*)malloc(len6 + 1);
    memcpy(s6, token + len3 + len4 + len5, len6);
    s6[len6] = '\0';
    strcat(decoded, s5);
    strcat(decoded, s4);
    strcat(decoded, s3);
    strcat(decoded, s6);
    free(s4);
    free(s5);
    free(s6);
    free(s3);
    return (char*) &*decoded;
}
