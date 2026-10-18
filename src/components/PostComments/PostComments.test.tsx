import {render,screen,within,fireEvent} from '@testing-library/react';

import PostComments from '.';
describe('Coment�rios de um post',()=>{
 it('insere dois coment�rios distintos, mant�m a ordem e limpa o campo',()=>{
  render(<PostComments/>);
  expect(screen.queryAllByTestId('comment')).toHaveLength(0);
  const input=screen.getByTestId('comment-input');
  fireEvent.change(input,{target:{value:'Excelente publica��o!'}});
  fireEvent.click(screen.getByTestId('comment-submit'));
  expect(input).toHaveValue('');
  fireEvent.change(input,{target:{value:'Obrigado por compartilhar.'}});
  fireEvent.click(screen.getByTestId('comment-submit'));
  const comments=within(screen.getByTestId('comments-list')).getAllByTestId('comment');
  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent('Excelente publica��o!');
  expect(comments[1]).toHaveTextContent('Obrigado por compartilhar.');
  expect(input).toHaveValue('');
 });
});

