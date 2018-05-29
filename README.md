# Undistraction.com

The site is deployed to [zeit](https://zeit.co/docs/features/dns). Every zeit
deployment is immutable, so undistraction.com is aliased automatically after
every deployment.

Deploy using:

```
yarn now:deploy
```

Nameservers for undistraction.com are pointed there and www is forwarded to the
naked domain. Mail is handled by Google Apps via MX records.
