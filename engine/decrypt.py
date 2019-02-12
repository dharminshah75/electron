import sys

cipher_text = sys.argv[1]
key = sys.argv[2]


text_len = len(cipher_text)
key_len = len(key)
original = ""
for i in range(text_len):
     original += str(chr((ord(cipher_text[i])-ord(key[i%key_len]))%0x110000))
print(original)

sys.stdout.flush()			