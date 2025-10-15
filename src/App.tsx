import './App.css'
function App() {


  return (
    <>
      <header>
        <div id="container-1">
          <div className="logo"> <img src="https://github.com/Olga-8Ch/Olga-8Ch.GitHub.io/blob/main/logotip.png?raw=true"
            height="120" width="84" /></div>

          <h1 className="site-name">Заголовок</h1>
        </div>



        <nav>
          <a href="#links">Ссылки</a>
          <a href="#form">Форма</a>
          <a href="#table">Таблица</a>
        </nav>
      </header>
      <main>
        <h2 id="links">А вот сейчас бы пиццу 4 мазератти</h2>
        <ul>

          <li> <a href="https://www.kubsu.ru/index.php">Ссылка на заглавную страницу КубГУ</a></li>

          <li> <a href="https://www.kubsu.ru">Ссылка на заглавную страницу КубГУ</a></li>

          <li><img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/%D0%97%D0%B0%D0%BA%D0%B0%D1%82_%D0%9F%D0%B0%D0%B0%D0%BD%D0%B0%D1%8F%D1%80%D0%B2%D0%B8.jpg"
            alt="Закат" width="150" height="70" /></li>

          <li><a href="form.html"> сокращенная ссылку на внутреннюю страницу</a></li>

          <li><a href="index.html"> сокращенную ссылку на главную страницу</a></li>

          <li><a href="#Kotd">ссылку на фрагмент текущей страницы</a></li>

          <li><a href="https://www.vk.com" target="_self" title="Мессенджер ВК">ссылку с тремя параметрами в URL</a></li>

          <li><a href="https://www.example.com/index.php?id=121">ссылку с параметром id в URL</a></li>

          <li><a href="./text.html">относительную на страницу в текущем каталоге</a></li>

          <li><a href="../about/text2.html">относительную на страницу в каталоге about</a></li>

          <li><a href="../file.html">относительную на страницу в каталоге уровнем выше текущего</a></li>

          <li><a href="../../filefour.html">относительную на страницу в каталоге двумя уровнями выше</a></li>

          <li>
            Не вынесла <a href="https://wikimultia.org/images/thumb/0/09/Soul.jpg/350px-Soul.jpg">душа</a> поэта<br />
            Позора мелочных обид,<br />
            Восстал он против мнений света<br />
            Один, как прежде… и убит!<br />
          </li>

          <li><a href="https://www.culture.ru/poems/36607/smert-poeta#icon-logo-mini">ссылку на фрагмент страницы стороннего
            сайта</a></li>

          <li style={{ height: "auto" }} >
            <map style={{ height: "auto", width: "100%", maxWidth: "1152px" }} name="Map">

              <area shape="rect" coords="300,288,540,505" href="https://ru.wikipedia.org/wiki/Прямоугольник"
                alt="Прямоугольная область" title="Прямоугольник" />
              <area shape="circle" coords="113,242,104" href="https://ru.wikipedia.org/wiki/Круг" alt="Круглая область"
                title="Круг" />
            </map>
            <img style={{ width: "100%", maxWidth: "1152px" }} src="figure.jpg" alt="" useMap="#Map" />
          </li>

          <li><a href="">ссылку с пустым href</a></li>

          <li><a>ссылку без href</a></li>

          <li><a href="https://github.com" rel="nofollow">ссылку, по которой запрещен переход поисковикам</a></li>

          <li><a href="https://gmail.com"></a>запрещенную для индексации поисковиками</li>

          <li>
            <ol>
              <li><a href="https://www.kinopoisk.ru/film/1727/" title="Дракула кинопоиск">Дракула</a></li>
              <li><a href="https://www.kinopoisk.ru/film/301/" title="Матрица кинопоиск">Матрица</a></li>
              <li><a href="https://www.kinopoisk.ru/film/775273/" title="Душа кинопоиск">Душа</a></li>
            </ol>
          </li>
          <li><a href="ftp://username:password@ftp.example.com/file.pdf">ссылку на файл на сервере FTP с авторизацией</a>
          </li>
        </ul>

        <table>
          <caption><h2 id="table">Таблица</h2></caption>
          <tr>
            <th className="table-cpu" rowSpan={2}>Регион</th>
            <th colSpan={3}>Средняя зарплата</th>
            <th className="table-mem" rowSpan={2}>Количество учителей</th>
          </tr>
          <tr>
            <th>по экономике региона</th>
            <th>учителей, сентябрь 2020</th>
            <th>учителей, сентябрь 2021</th>
          </tr>
          <tr>
            <td>Волгоградская область</td>
            <td>19,0</td>
            <td>16,8</td>
            <td>17,2</td>
            <td>83 тыс чел</td>
          </tr>
          <tr>
            <td>Краснодарский край</td>
            <td>16,5</td>
            <td>18,3</td>
            <td>21,4</td>
            <td>86 тыс чел</td>
          </tr>
          <tr>
            <td>Москва</td>
            <td>39</td>
            <td>42,8</td>
            <td>56,6</td>
            <td>250 тыс чел</td>
          </tr>
          <tr>
            <td>Алтайский край</td>
            <td>12,3</td>
            <td>14</td>
            <td>15</td>
            <td>74 тыс чел</td>
          </tr>
          <tr>
            <td>Камчатский край</td>
            <td>35,1</td>
            <td>34</td>
            <td>43</td>
            <td>67 тыс чел</td>
          </tr>
          <tr>
            <td>Санкт-Петербург</td>
            <td>27,3</td>
            <td>27,5</td>
            <td>30,6</td>
            <td>106 тыс чел</td>
          </tr>
        </table>
        <form>
          <caption><h2 id="form">Форма</h2></caption>
          <label>
            Введите ваше ФИО ниже:<br />
            <input required type="text" placeholder="Иванов Иван Иванович" />
          </label>
          <br />
          <label>
            Ведите ваш номер телефона:<br />
            <input required type="tel" placeholder="+7-888-888-88-88" />
          </label>
          <br />
          <label>
            Введите адрес электронной почты:<br />
            <input required type="email" placeholder="exadr@yandex.ru" />
          </label>
          <br />
          <label>
            Введите дату рождения:<br />
            <input required type="date" value="2000-01-01" />
          </label>
          <br />
          <label>
            Введите пол:
            <label>
              <input name="radio-1" type="radio" />
              Женский
            </label>
            <label>
              <input name="radio-1" type="radio" />
              Мужской
            </label>
          </label>
          <br />
          <label>
            Любимый язык программирования:<br />
            <select name="prog-lang[]" multiple>
              <option value="Pascal">Pascal</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
              <option value="C">C</option>
              <option value="JavaScript">JavaScript</option>
              <option value="PHP">PHP</option>
              <option value="Clojure">Clojure</option>
              <option value="Prolog">Prolog</option>
              <option value="Scala">Scala</option>
            </select>
          </label>
          <br />
          <label>
            Напишите немного о себе:<br />
            <textarea></textarea>
          </label>
          <br />
          <label>
            <input name="check" type="checkbox" />
            С контрактом ознакомлен(а)
          </label>
          <br /><br />
          <input type="submit" value="Сохранить" />
        </form>
      </main>
      <footer className="footer">
        <p className="footer__text"> (c) Чернухина Ольга</p>

      </footer>
    </>
  )
}

export default App
