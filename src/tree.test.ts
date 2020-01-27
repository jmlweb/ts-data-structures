import Tree from './tree';

describe('Tree', () => {
  const dom = Tree.create('html');
  const head = dom.root.addChild('head');
  const body = dom.root.addChild('body');
  head.addChild('title - ts-data-structures-algorithms');
  const header = body.addChild('header');
  const main = body.addChild('main');
  const footer = body.addChild('footer');
  header.addChild('h1 - ts-data-structures-algorithms');
  main.addChild('p - Learn about trees!');
  footer.addChild('Copyright 2020');
  it('works', () => {
    expect(dom.print()).toBe(
      `html
    head
      title - ts-data-structures-algorithms
    body
      header
        h1 - ts-data-structures-algorithms
      main
        p - Learn about trees!
      footer
        Copyright 2020`
    );
  });
});
