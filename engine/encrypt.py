import sys

plain_text = sys.argv[1]
key = sys.argv[2]

key_len = len(key)
text_len = len(plain_text)
cipher_text = ""
for i in range(text_len):
        cipher_text += str(chr((ord(plain_text[i])+ord(key[i%key_len]))%0x110000))
print(cipher_text)

sys.stdout.flush()