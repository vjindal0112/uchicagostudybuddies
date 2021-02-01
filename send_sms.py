from twilio.rest import Client

# Find these values at https://twilio.com/user/account
account_sid = "ACbe593bf253ac8a39ca8ead77a5ef610f"
auth_token = "3e690559a76c1fb9971ea9b5633b42bc"

client = Client(account_sid, auth_token)

client.api.account.messages.create(
    to="+16314280750",
    from_="+18312451284",
    body="Let's group these guys!")
