from py_algorand_sdk import account, mnemonic

mnemonic_phrase = "click, later, cabin, letter, require, tackle, flush, pipe, desert, broccoli, enemy, half, fat, wreck, dial, enter, party, unlock, roast, lyrics, picture, guess, sleep, abandon, earn"
sk = mnemonic.to_private_key(mnemonic_phrase)
address = account.address_from_private_key(sk)

# Interact with the Algorand blockchain using 'address' and 'sk'
