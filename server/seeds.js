if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'KizunaJapan',
    url: 'http://www.kizuna.co.jp'
  });
  Posts.insert({
    title: 'Doreming(USA)',
    url: 'http://www.doreming.com'
  });
  Posts.insert({
    title: 'Doreming(JPN)',
    url: 'http://www.doreming.com/ja'
  });
  Posts.insert({
    title: '吉野家',
    url: 'http://www.yoshinoya.com/menu/index.html'
  });
  Posts.insert({
    title: 'CoCo壱番屋',
    url: 'http://www.ichibanya.co.jp/menu/index.html'
  });
}
