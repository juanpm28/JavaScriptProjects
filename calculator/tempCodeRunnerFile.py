
def intercambiar(texto):
    texto_cambiado = ""
    for caracter in texto:
        if caracter == caracter.upper():
            texto_cambiado += caracter.lower()
        else:
            texto_cambiado += caracter.upper()
    return texto_cambiado


print(intercambiar("Hola Como Estas"))  # => hOLA cOMO eSTAS
print(intercambiar("HOLA"))  # => hola
print(intercambiar("hola"))  # => HOLA