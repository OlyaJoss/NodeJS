let data = [
    {id: 0, name: 'Travis', date: '22.06.2022', sum: 234},
    {id: 1, name: 'Alex', date: '15.06.2022', sum: 234},
    {id: 2, name: 'Dima', date: '21.06.2022', sum: 23423234234},
    {id: 3, name: 'Masha', date: '17.06.2022', sum: 345345},
  ]
  
  const users = []
  
  const express = require('express');
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  
  app.get(
    '/', (req, res) => {
      res.send('Hello world!')
    }
  );
  
  // app.get(
  //   '/data', (req, res) => {
  //     res.send(data)
  //   }
  // );
  
  app.post(
    '/reg', (req, res) => {
      const user = {
        login: req.body.login,
        password: req.body.password
      };
      users.push(user);
      res.json(users);
  
    }
  );
  
  app.delete('/data/:id', (req, res)  => {


      // Достаем из тела запроса айди
      const dataId = parseInt(req.params.id);
      console.log(dataId)
    //   // Есть ли у нас в массиве  с данными (data) этот айди (findindex)
      
      
      const idx = data.findIndex((item) => item.id === dataId)
      if (idx !== -1) {
      // этот индекс есть у нас мы с ним работаем
      newData = data.filter((item)=> item.id !== dataId)
      data = [...newData]
        res.send(data)
      } else {
        res.status(404).json('Не найдено!!!')
      }
    }
  )
  
  app.listen(8080, () => {
    console.log('I am on http://localhost:8080 port')
  })
  