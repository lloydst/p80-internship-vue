export default function (context) {
  if (context.req.ip === '127.0.0.1') {
    context.res.redirect('/channels')
  }
}
