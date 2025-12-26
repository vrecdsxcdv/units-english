"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function TechnologyAndGadgets({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    default:
      return <Step1 />;
  }
}

// Step 1: Basic Technology Vocabulary — Базовая технологическая лексика
function Step1() {
  return (
    <div className="space-y-8">
      <Section title="📱 Technology and Gadgets — Технологии и гаджеты">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Welcome to Technology!
          </h3>
          <p className="text-gray-700">
            В этом уроке вы изучите словарный запас о технологиях, гаджетах,
            интернете и компьютерах. Технологии окружают нас повсюду, и очень
            важно уметь говорить о них на английском!
          </p>
        </div>
      </Section>

      <Section title="Basic Technology Vocabulary — Базовая лексика">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
            <p className="font-bold text-lg text-blue-900 mb-2">
              📱 Phone — Телефон
            </p>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>• Mobile phone / Cell phone — мобильный телефон</li>
              <li>• Smartphone — смартфон</li>
              <li>• Screen — экран</li>
              <li>• Battery — батарея</li>
              <li>• Charger — зарядное устройство</li>
              <li>• Call — звонок</li>
              <li>• Text message / SMS — сообщение</li>
              <li>• App / Application — приложение</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-bold text-lg text-green-900 mb-2">
              💻 Computer — Компьютер
            </p>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>• Desktop computer — настольный компьютер</li>
              <li>• Laptop — ноутбук</li>
              <li>• Tablet — планшет</li>
              <li>• Keyboard — клавиатура</li>
              <li>• Mouse — мышь</li>
              <li>• Monitor — монитор</li>
              <li>• Processor — процессор</li>
              <li>• Hard drive — жёсткий диск</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-bold text-lg text-purple-900 mb-2">
              🌐 Internet — Интернет
            </p>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>• Wi-Fi — вай-фай</li>
              <li>• Website — веб-сайт</li>
              <li>• Browser — браузер</li>
              <li>• Search engine — поисковая система</li>
              <li>• Email — электронная почта</li>
              <li>• Download — скачивать</li>
              <li>• Upload — загружать</li>
              <li>• Online / Offline — онлайн / офлайн</li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <p className="font-bold text-lg text-orange-900 mb-2">
              🎮 Other Gadgets — Другие гаджеты
            </p>
            <ul className="space-y-1 text-gray-800 text-sm">
              <li>• Headphones — наушники</li>
              <li>• Speaker — колонка</li>
              <li>• Camera — камера</li>
              <li>• Smartwatch — умные часы</li>
              <li>• USB cable — USB кабель</li>
              <li>• Power bank — пауэрбанк</li>
              <li>• Remote control — пульт управления</li>
              <li>• Game console — игровая консоль</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Example Sentences — Примеры предложений">
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900">
              I use my smartphone every day to check emails.
            </p>
            <p className="text-sm text-gray-600">
              Я использую свой смартфон каждый день, чтобы проверять электронную
              почту.
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900">
              My laptop battery is low, I need to charge it.
            </p>
            <p className="text-sm text-gray-600">
              Батарея моего ноутбука разряжена, мне нужно зарядить его.
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900">
              Can you connect to the Wi-Fi?
            </p>
            <p className="text-sm text-gray-600">
              Ты можешь подключиться к Wi-Fi?
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900">
              I need to download a new app for my phone.
            </p>
            <p className="text-sm text-gray-600">
              Мне нужно скачать новое приложение для моего телефона.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Using Technology — Использование технологий
function Step2() {
  return (
    <div className="space-y-8">
      <Section title="Using Technology — Использование технологий">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-3">
            Technology Actions — Технологические действия
          </h3>
          <p className="text-gray-700">
            Изучите глаголы и выражения, связанные с использованием технологий.
          </p>
        </div>
      </Section>

      <Section title="Technology Verbs — Технологические глаголы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
            <p className="font-bold text-blue-900 mb-2">Phone Actions:</p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Call someone</b> — позвонить кому-то
              </li>
              <li>
                • <b>Text someone</b> — написать сообщение
              </li>
              <li>
                • <b>Answer the phone</b> — ответить на звонок
              </li>
              <li>
                • <b>Hang up</b> — повесить трубку
              </li>
              <li>
                • <b>Charge the phone</b> — зарядить телефон
              </li>
              <li>
                • <b>Turn on/off</b> — включить/выключить
              </li>
              <li>
                • <b>Install an app</b> — установить приложение
              </li>
              <li>
                • <b>Delete an app</b> — удалить приложение
              </li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-bold text-green-900 mb-2">Computer Actions:</p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Turn on/off the computer</b> — включить/выключить
              </li>
              <li>
                • <b>Restart</b> — перезагрузить
              </li>
              <li>
                • <b>Type</b> — печатать
              </li>
              <li>
                • <b>Click</b> — нажимать (мышкой)
              </li>
              <li>
                • <b>Save a file</b> — сохранить файл
              </li>
              <li>
                • <b>Open a program</b> — открыть программу
              </li>
              <li>
                • <b>Close a window</b> — закрыть окно
              </li>
              <li>
                • <b>Copy and paste</b> — копировать и вставить
              </li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">Internet Actions:</p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Go online</b> — выйти в интернет
              </li>
              <li>
                • <b>Browse the web</b> — просматривать веб-страницы
              </li>
              <li>
                • <b>Search for information</b> — искать информацию
              </li>
              <li>
                • <b>Download a file</b> — скачать файл
              </li>
              <li>
                • <b>Upload a photo</b> — загрузить фото
              </li>
              <li>
                • <b>Send an email</b> — отправить письмо
              </li>
              <li>
                • <b>Log in / Log out</b> — войти / выйти
              </li>
              <li>
                • <b>Stream a video</b> — смотреть видео онлайн
              </li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <p className="font-bold text-orange-900 mb-2">Social Media:</p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Post a photo</b> — опубликовать фото
              </li>
              <li>
                • <b>Share a link</b> — поделиться ссылкой
              </li>
              <li>
                • <b>Like a post</b> — поставить лайк
              </li>
              <li>
                • <b>Comment</b> — комментировать
              </li>
              <li>
                • <b>Follow someone</b> — подписаться на кого-то
              </li>
              <li>
                • <b>Unfollow</b> — отписаться
              </li>
              <li>
                • <b>Tag someone</b> — отметить кого-то
              </li>
              <li>
                • <b>Block someone</b> — заблокировать
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Practice Sentences — Практические предложения">
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I need to charge my phone because the battery is dead.
            </p>
            <p className="text-sm text-gray-600">
              Мне нужно зарядить телефон, потому что батарея разрядилась.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              Can you help me install this app on my tablet?
            </p>
            <p className="text-sm text-gray-600">
              Ты можешь помочь мне установить это приложение на планшет?
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              She is browsing the web to find information for her project.
            </p>
            <p className="text-sm text-gray-600">
              Она просматривает веб-страницы, чтобы найти информацию для своего
              проекта.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              Don't forget to log out after using a public computer.
            </p>
            <p className="text-sm text-gray-600">
              Не забудь выйти после использования общественного компьютера.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 3: Technology Problems — Технологические проблемы
function Step3() {
  return (
    <div className="space-y-8">
      <Section title="Technology Problems — Технологические проблемы">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-red-900 mb-3">
            Common Tech Problems — Распространённые проблемы с техникой
          </h3>
          <p className="text-gray-700">
            Иногда с технологиями возникают проблемы. Давайте изучим, как
            говорить о них на английском.
          </p>
        </div>
      </Section>

      <Section title="Common Problems — Распространённые проблемы">
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-red-300 rounded-lg">
            <p className="font-bold text-lg text-red-900 mb-3">
              Phone Problems — Проблемы с телефоном
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>
                • The battery is dead / low — батарея разрядилась / низкая
              </li>
              <li>• The screen is cracked — экран треснул</li>
              <li>• The phone is frozen — телефон завис</li>
              <li>• No signal — нет сигнала</li>
              <li>• The phone won't turn on — телефон не включается</li>
              <li>• I forgot my password — я забыл пароль</li>
              <li>• The phone is slow — телефон медленный</li>
              <li>• The storage is full — память заполнена</li>
            </ul>
          </div>

          <div className="p-5 bg-white border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-lg text-orange-900 mb-3">
              Computer Problems — Проблемы с компьютером
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• The computer crashed — компьютер сломался</li>
              <li>• The system is slow — система медленная</li>
              <li>• The keyboard doesn't work — клавиатура не работает</li>
              <li>• The mouse is broken — мышь сломана</li>
              <li>• I lost my files — я потерял свои файлы</li>
              <li>• The printer is jammed — принтер застрял</li>
              <li>• The computer has a virus — на компьютере вирус</li>
              <li>• The screen is black — экран чёрный</li>
            </ul>
          </div>

          <div className="p-5 bg-white border-2 border-yellow-300 rounded-lg">
            <p className="font-bold text-lg text-yellow-900 mb-3">
              Internet Problems — Проблемы с интернетом
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• The Wi-Fi is not working — Wi-Fi не работает</li>
              <li>• The internet is slow — интернет медленный</li>
              <li>
                • I can't connect to Wi-Fi — я не могу подключиться к Wi-Fi
              </li>
              <li>• The website is not loading — сайт не загружается</li>
              <li>• The connection is lost — соединение потеряно</li>
              <li>• I forgot my password — я забыл пароль</li>
              <li>• The page is not responding — страница не отвечает</li>
              <li>• The download failed — загрузка не удалась</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Solutions — Решения проблем">
        <div className="space-y-3">
          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-semibold text-green-900 mb-2">
              → Restart your device — Перезагрузите устройство
            </p>
            <p className="text-sm text-gray-700">
              Most problems can be solved by restarting.
            </p>
          </div>
          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-semibold text-green-900 mb-2">
              → Check the connection — Проверьте соединение
            </p>
            <p className="text-sm text-gray-700">
              Make sure all cables are plugged in correctly.
            </p>
          </div>
          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-semibold text-green-900 mb-2">
              → Update the software — Обновите программное обеспечение
            </p>
            <p className="text-sm text-gray-700">
              Updates often fix bugs and improve performance.
            </p>
          </div>
          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-semibold text-green-900 mb-2">
              → Contact technical support — Свяжитесь с технической поддержкой
            </p>
            <p className="text-sm text-gray-700">
              If nothing works, ask for professional help.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 4: Advanced Technology Vocabulary — Продвинутая лексика
function Step4() {
  return (
    <div className="space-y-8">
      <Section title="Advanced Technology Vocabulary">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Modern Technology Terms
          </h3>
          <p className="text-gray-700">
            Изучите современные технологические термины, включая AI, cloud
            computing, и другие важные концепции.
          </p>
        </div>
      </Section>

      <Section title="Modern Tech Vocabulary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-3">
              🤖 Artificial Intelligence — Искусственный интеллект
            </p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>AI (Artificial Intelligence)</b> — ИИ
              </li>
              <li>
                • <b>Machine learning</b> — машинное обучение
              </li>
              <li>
                • <b>Algorithm</b> — алгоритм
              </li>
              <li>
                • <b>Neural network</b> — нейронная сеть
              </li>
              <li>
                • <b>Data</b> — данные
              </li>
              <li>
                • <b>Training data</b> — обучающие данные
              </li>
              <li>
                • <b>Model</b> — модель
              </li>
              <li>
                • <b>Prediction</b> — прогноз
              </li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
            <p className="font-bold text-blue-900 mb-3">
              ☁️ Cloud Computing — Облачные вычисления
            </p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Cloud storage</b> — облачное хранилище
              </li>
              <li>
                • <b>Backup</b> — резервная копия
              </li>
              <li>
                • <b>Sync</b> — синхронизация
              </li>
              <li>
                • <b>Server</b> — сервер
              </li>
              <li>
                • <b>Database</b> — база данных
              </li>
              <li>
                • <b>Remote access</b> — удалённый доступ
              </li>
              <li>
                • <b>Cloud service</b> — облачный сервис
              </li>
              <li>
                • <b>Data center</b> — центр обработки данных
              </li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-bold text-green-900 mb-3">
              🔒 Cybersecurity — Кибербезопасность
            </p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Password</b> — пароль
              </li>
              <li>
                • <b>Encryption</b> — шифрование
              </li>
              <li>
                • <b>Firewall</b> — брандмауэр
              </li>
              <li>
                • <b>Virus</b> — вирус
              </li>
              <li>
                • <b>Hacker</b> — хакер
              </li>
              <li>
                • <b>Malware</b> — вредоносное ПО
              </li>
              <li>
                • <b>Two-factor authentication</b> — двухфакторная
                аутентификация
              </li>
              <li>
                • <b>Phishing</b> — фишинг
              </li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <p className="font-bold text-orange-900 mb-3">
              📊 Data & Programming — Данные и программирование
            </p>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                • <b>Code</b> — код
              </li>
              <li>
                • <b>Programming</b> — программирование
              </li>
              <li>
                • <b>Software</b> — программное обеспечение
              </li>
              <li>
                • <b>Application</b> — приложение
              </li>
              <li>
                • <b>Debug</b> — отладка
              </li>
              <li>
                • <b>Update</b> — обновление
              </li>
              <li>
                • <b>Version</b> — версия
              </li>
              <li>
                • <b>Interface</b> — интерфейс
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Technology Trends — Технологические тренды">
        <div className="space-y-3">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-bold text-indigo-900">Virtual Reality (VR)</p>
            <p className="text-sm text-gray-700">
              Виртуальная реальность — technology that creates an immersive
              digital environment.
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-bold text-indigo-900">Augmented Reality (AR)</p>
            <p className="text-sm text-gray-700">
              Дополненная реальность — overlays digital information onto the
              real world.
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-bold text-indigo-900">
              Internet of Things (IoT)
            </p>
            <p className="text-sm text-gray-700">
              Интернет вещей — network of physical devices connected to the
              internet.
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-bold text-indigo-900">5G Technology</p>
            <p className="text-sm text-gray-700">
              5G технология — fifth generation mobile network with faster
              speeds.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 5: Phrasal Verbs with Technology
function Step5() {
  return (
    <div className="space-y-8">
      <Section title="Phrasal Verbs with Technology">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-cyan-900 mb-3">
            Technology Phrasal Verbs
          </h3>
          <p className="text-gray-700">
            Фразовые глаголы очень часто используются, когда мы говорим о
            технологиях. Изучите их!
          </p>
        </div>
      </Section>

      <Section title="Common Tech Phrasal Verbs">
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-bold text-blue-900">Turn on</p>
                  <p className="text-sm text-gray-700">Включить</p>
                  <p className="text-xs text-gray-600 italic">
                    Turn on the computer.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-bold text-blue-900">Turn off</p>
                  <p className="text-sm text-gray-700">Выключить</p>
                  <p className="text-xs text-gray-600 italic">
                    Don't forget to turn off your phone.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-bold text-blue-900">Log in / Log on</p>
                  <p className="text-sm text-gray-700">Войти в систему</p>
                  <p className="text-xs text-gray-600 italic">
                    Log in to your account.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-bold text-blue-900">Log out / Log off</p>
                  <p className="text-sm text-gray-700">Выйти из системы</p>
                  <p className="text-xs text-gray-600 italic">
                    Always log out after using a public computer.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-bold text-blue-900">Sign up</p>
                  <p className="text-sm text-gray-700">Зарегистрироваться</p>
                  <p className="text-xs text-gray-600 italic">
                    Sign up for a free account.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-bold text-blue-900">Set up</p>
                  <p className="text-sm text-gray-700">Настроить, установить</p>
                  <p className="text-xs text-gray-600 italic">
                    I need to set up my new phone.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-bold text-green-900">Back up</p>
                  <p className="text-sm text-gray-700">
                    Сделать резервную копию
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    Back up your files regularly.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-bold text-green-900">Plug in</p>
                  <p className="text-sm text-gray-700">Подключить</p>
                  <p className="text-xs text-gray-600 italic">
                    Plug in the charger.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-bold text-green-900">Unplug</p>
                  <p className="text-sm text-gray-700">Отключить</p>
                  <p className="text-xs text-gray-600 italic">
                    Unplug the device when it's fully charged.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-bold text-green-900">Shut down</p>
                  <p className="text-sm text-gray-700">Выключить (систему)</p>
                  <p className="text-xs text-gray-600 italic">
                    Shut down the computer properly.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-bold text-green-900">Start up</p>
                  <p className="text-sm text-gray-700">Запустить</p>
                  <p className="text-xs text-gray-600 italic">
                    The computer takes time to start up.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="font-bold text-green-900">Pick up</p>
                  <p className="text-sm text-gray-700">Ответить (на звонок)</p>
                  <p className="text-xs text-gray-600 italic">
                    Pick up the phone, it's ringing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="More Phrasal Verbs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-purple-50 rounded">
            <p className="font-bold text-purple-900">Scroll down/up</p>
            <p className="text-sm">Прокручивать вниз/вверх</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="font-bold text-purple-900">Type in</p>
            <p className="text-sm">Вводить (информацию)</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="font-bold text-purple-900">Click on</p>
            <p className="text-sm">Нажать на</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="font-bold text-purple-900">Zoom in/out</p>
            <p className="text-sm">Увеличить/уменьшить</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="font-bold text-purple-900">Swipe left/right</p>
            <p className="text-sm">Свайпнуть влево/вправо</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <p className="font-bold text-purple-900">Come across</p>
            <p className="text-sm">Наткнуться на (информацию)</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 6: Homework — Домашнее задание
function Step6() {
  return (
    <div className="space-y-8">
      <Section title="📚 Homework — Домашнее задание">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">
            Practice Technology Vocabulary!
          </h3>
          <p className="text-gray-700">
            Выполните эти задания, чтобы закрепить словарный запас о
            технологиях.
          </p>
        </div>
      </Section>

      <Section title="Task 1: Write about Your Technology">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <p className="font-bold text-lg text-blue-900 mb-3">
            Answer these questions:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              1. What kind of smartphone do you have? What features do you like
              most?
            </li>
            <li>
              2. How often do you use your computer or laptop? What do you use
              it for?
            </li>
            <li>
              3. What apps do you use every day? Why are they important to you?
            </li>
            <li>
              4. Have you ever had a problem with your phone or computer? What
              happened?
            </li>
            <li>5. What technology do you want to buy in the future? Why?</li>
          </ul>
        </div>
      </Section>

      <Section title="Task 2: Technology Phrasal Verbs">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <p className="font-bold text-lg text-green-900 mb-3">
            Complete the sentences with phrasal verbs:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>1. I need to _______ my phone because the battery is low.</li>
            <li>
              2. Don't forget to _______ when you finish using the computer.
            </li>
            <li>3. Can you help me _______ my new laptop?</li>
            <li>4. Please _______ your files before the system crashes.</li>
            <li>5. _______ the phone! Someone is calling you.</li>
            <li>6. I need to _______ for a new email account.</li>
            <li>7. _______ the computer properly before unplugging it.</li>
            <li>8. The computer takes 2 minutes to _______.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Phrasal verbs: charge, log out, set up, back up, pick up, sign up,
            shut down, start up
          </p>
        </div>
      </Section>

      <Section title="Task 3: Technology Vocabulary">
        <div className="p-5 bg-white border-2 border-purple-300 rounded-lg">
          <p className="font-bold text-lg text-purple-900 mb-3">
            Learn this vocabulary for the next lesson:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">manuscript — рукопись</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">ancient — древний</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">discovery — открытие</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">enable — позволять</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">breakthrough — прорыв</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">scroll — свиток</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">decode — расшифровать</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">recover — восстановить</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">reveal — раскрывать</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">attempt — попытка</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">excavation — раскопки</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">artifact — артефакт</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 7: Logic Task — Задание на логику
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="🧠 Logic Task — Задание на логику">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Technology Situations
          </h3>
          <p className="text-gray-700">
            Решите логические задачи, связанные с технологиями.
          </p>
        </div>
      </Section>

      <Section title="Task 1: Which Device?">
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              Choose the best device for each situation:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900 mb-2">
                  1. You need to make a video call while walking in the park.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Options: Desktop computer / Smartphone / Smart TV
                </p>
                <input
                  type="text"
                  value={answers.device1 || ""}
                  onChange={(e) => handleChange("device1", e.target.value)}
                  placeholder="Ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <p className="text-gray-900 mb-2">
                  2. You need to type a long document and work with multiple
                  windows.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Options: Smartphone / Laptop / Smartwatch
                </p>
                <input
                  type="text"
                  value={answers.device2 || ""}
                  onChange={(e) => handleChange("device2", e.target.value)}
                  placeholder="Ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <p className="text-gray-900 mb-2">
                  3. You want to listen to music during your workout without
                  carrying a large device.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Options: Desktop / Smartphone + headphones / Tablet
                </p>
                <input
                  type="text"
                  value={answers.device3 || ""}
                  onChange={(e) => handleChange("device3", e.target.value)}
                  placeholder="Ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 2: Technology Problems & Solutions">
        <div className="p-5 bg-white border-2 border-orange-300 rounded-lg">
          <p className="font-bold text-lg text-gray-900 mb-3">
            Match the problem with the best solution:
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-gray-900 mb-2">
                1. Your phone battery dies every few hours.
              </p>
              <textarea
                value={answers.solution1 || ""}
                onChange={(e) => handleChange("solution1", e.target.value)}
                placeholder="Что нужно сделать?"
                rows={2}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <p className="text-gray-900 mb-2">
                2. You forgot your email password.
              </p>
              <textarea
                value={answers.solution2 || ""}
                onChange={(e) => handleChange("solution2", e.target.value)}
                placeholder="Что нужно сделать?"
                rows={2}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <p className="text-gray-900 mb-2">
                3. Your computer is running very slow.
              </p>
              <textarea
                value={answers.solution3 || ""}
                onChange={(e) => handleChange("solution3", e.target.value)}
                placeholder="Что нужно сделать?"
                rows={2}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 3: Technology Timeline">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <p className="font-bold text-lg text-gray-900 mb-3">
            Arrange these actions in the correct order:
          </p>
          <p className="text-gray-700 mb-3">
            When setting up a new smartphone, what should you do first, second,
            third, etc.?
          </p>
          <textarea
            value={answers.timeline || ""}
            onChange={(e) => handleChange("timeline", e.target.value)}
            placeholder="Напишите правильный порядок действий: turn on the phone, create an account, download apps, etc."
            rows={5}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
      </Section>
    </div>
  );
}

// Step 8: Pre-Reading Vocabulary — Лексика перед чтением
function Step8() {
  return (
    <div className="space-y-8">
      <Section title="📖 Pre-Reading Vocabulary">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-3">
            Vocabulary for AI Reading
          </h3>
          <p className="text-gray-700">
            Изучите эти слова перед чтением текста про искусственный интеллект и
            древние рукописи.
          </p>
        </div>
      </Section>

      <Section title="Key Vocabulary — Ключевые слова">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-300 rounded-lg">
            <p className="font-bold text-blue-900 text-lg mb-3">
              Historical Terms
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">manuscript</p>
                <p className="text-gray-600">[ˈmænjʊskrɪpt] — рукопись</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">ancient</p>
                <p className="text-gray-600">[ˈeɪnʃənt] — древний</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">scroll</p>
                <p className="text-gray-600">[skrəʊl] — свиток</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">papyrus</p>
                <p className="text-gray-600">[pəˈpaɪrəs] — папирус</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">excavation</p>
                <p className="text-gray-600">[ˌekskəˈveɪʃən] — раскопки</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">artifact</p>
                <p className="text-gray-600">[ˈɑːtɪfækt] — артефакт</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-bold text-green-900 text-lg mb-3">
              Science & Technology
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">enable</p>
                <p className="text-gray-600">
                  [ɪˈneɪbəl] — позволять, давать возможность
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">breakthrough</p>
                <p className="text-gray-600">[ˈbreɪkθruː] — прорыв</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">decode</p>
                <p className="text-gray-600">[diːˈkəʊd] — расшифровать</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">recover</p>
                <p className="text-gray-600">[rɪˈkʌvə] — восстановить</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">reveal</p>
                <p className="text-gray-600">
                  [rɪˈviːl] — раскрывать, обнаруживать
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">virtual</p>
                <p className="text-gray-600">[ˈvɜːtʃuəl] — виртуальный</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 text-lg mb-3">
              Action Verbs
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">attempt</p>
                <p className="text-gray-600">[əˈtempt] — попытка, пытаться</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">identify</p>
                <p className="text-gray-600">
                  [aɪˈdentɪfaɪ] — определять, идентифицировать
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">manage</p>
                <p className="text-gray-600">
                  [ˈmænɪdʒ] — удаваться, справляться
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">bury</p>
                <p className="text-gray-600">[ˈberi] — хоронить, зарывать</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">prevent</p>
                <p className="text-gray-600">[prɪˈvent] — предотвращать</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">crumble</p>
                <p className="text-gray-600">
                  [ˈkrʌmbəl] — крошиться, разрушаться
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <p className="font-bold text-orange-900 text-lg mb-3">
              Descriptive Words
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">sensational</p>
                <p className="text-gray-600">[senˈseɪʃənəl] — сенсационный</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">challenging</p>
                <p className="text-gray-600">[ˈtʃælɪndʒɪŋ] — сложный</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">damaged</p>
                <p className="text-gray-600">[ˈdæmɪdʒd] — повреждённый</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">mysterious</p>
                <p className="text-gray-600">[mɪˈstɪəriəs] — загадочный</p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">remarkable</p>
                <p className="text-gray-600">
                  [rɪˈmɑːkəbəl] — замечательный, выдающийся
                </p>
              </div>
              <div className="p-2 bg-white rounded">
                <p className="font-semibold">volcanic</p>
                <p className="text-gray-600">[vɒlˈkænɪk] — вулканический</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Important Phrases — Важные фразы">
        <div className="space-y-3">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-semibold text-indigo-900">
              make a sensational discovery
            </p>
            <p className="text-sm text-gray-700">
              сделать сенсационное открытие
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-semibold text-indigo-900">volcanic eruption</p>
            <p className="text-sm text-gray-700">извержение вулкана</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-semibold text-indigo-900">
              seem to be lost forever
            </p>
            <p className="text-sm text-gray-700">
              казаться потерянными навсегда
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-semibold text-indigo-900">
              come as a game-changer
            </p>
            <p className="text-sm text-gray-700">
              стать революционным изменением
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <p className="font-semibold text-indigo-900">
              without any physical contact
            </p>
            <p className="text-sm text-gray-700">без физического контакта</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 9: Reading Part 1 — Чтение часть 1
function Step9() {
  return (
    <div className="space-y-8">
      <Section title="📖 Reading: AI Reads an Ancient Manuscript (Part 1)">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            The Vesuvius Challenge
          </h3>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              In 2024, an international group of University professors and
              students made a sensational discovery. They managed to identify
              about 2,000 letters in ancient Roman manuscripts. The project was
              called <i>The Vesuvius Challenge</i>, and it aimed to find a new
              method to read the manuscripts using AI (artificial intelligence).
              It was challenging, as most of the manuscripts were seriously
              damaged.
            </p>
            <p>
              The story behind the manuscripts was mysterious. It started on a
              tragic summer day in 79 B.C., when Roman cities suffered a
              volcanic eruption. The ash and lava coming from{" "}
              <i>Mount Vesuvius</i> buried thousands of people and destroyed
              their houses. The villa, once owned by Julius Caesar's
              father-in-law, sank into the hot lava too. There was a huge
              library of papyrus manuscripts inside, and they seemed to be lost
              forever.
            </p>
            <p>
              However, some of the manuscripts did not burn. The scrolls were
              buried in the solid volcanic lava, dried out and carbonised by the
              heat, which prevented the bacteria from getting inside. Amazingly,
              after staying underground for about 1,700 years, the manuscripts
              were found again.
            </p>
            <p>
              In the 18th century, an Italian farmworker noticed something
              unusual while digging a well. The archaeologists started digging
              and found a marble pavement and statues. Further excavations
              revealed a large collection of ancient manuscripts. Unfortunately,
              the attempts to open the scrolls destroyed many of them. It was
              impossible to read and study the artefacts as most of the
              manuscripts were badly burnt and, when touched, crumbled in the
              hands, turning into ash and dust. Thus, until the 21st century,
              the manuscripts were kept in museums. The scientists did not touch
              them to prevent any additional harm, so the texts remained a
              complete mystery.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Vocabulary Check — Проверка словаря">
        <div className="bg-yellow-50 border-2 border-yellow-400 p-5 rounded-lg">
          <p className="font-bold text-yellow-900 mb-3">
            Убедитесь, что вы понимаете эти ключевые слова из текста:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-800">
            <li>• sensational discovery — сенсационное открытие</li>
            <li>• manage to — удаваться</li>
            <li>• volcanic eruption — извержение вулкана</li>
            <li>• bury — хоронить, зарывать</li>
            <li>• manuscript — рукопись</li>
            <li>• scroll — свиток</li>
            <li>• carbonised — обугленный</li>
            <li>• prevent — предотвращать</li>
            <li>• excavation — раскопки</li>
            <li>• crumble — крошиться</li>
            <li>• artefact — артефакт</li>
            <li>• remain — оставаться</li>
          </ul>
        </div>
      </Section>

      <Section title="Comprehension Questions — Вопросы на понимание">
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              1. What was The Vesuvius Challenge project about?
            </p>
            <p className="text-sm text-gray-600">
              It aimed to find a new method to read ancient manuscripts using
              AI.
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              2. What happened in 79 B.C.?
            </p>
            <p className="text-sm text-gray-600">
              Mount Vesuvius erupted and buried Roman cities, including a villa
              with a library.
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              3. Why did the manuscripts survive?
            </p>
            <p className="text-sm text-gray-600">
              They were carbonised by heat, which prevented bacteria from
              getting inside.
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              4. Why couldn't scientists read the manuscripts in the 18th
              century?
            </p>
            <p className="text-sm text-gray-600">
              The manuscripts were badly burnt and crumbled when touched,
              turning into ash.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 10: Reading Part 2 + Final Exercises
function Step10() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="📖 Reading: AI Reads an Ancient Manuscript (Part 2)">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            AI as a Game-Changer
          </h3>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              AI came as a game-changer. It enabled the scientists to look
              inside the manuscripts without any physical contact, which was a
              remarkable breakthrough! Dr. Brent Seales, a computer science
              professor, is the key figure in <i>The Vesuvius Challenge</i>{" "}
              project. He and his team of AI developers (some of whom are
              students) virtually unwrap the scrolls, recover the pieces of the
              texts and decode them. Now, the challenge is to read the whole
              texts of the scrolls, and Dr. Seales believes that, with AI, it
              will soon be possible.
            </p>
            <p>
              So far, most of the opened scrolls contain philosophical texts.
              They were written in Greek and prove that ancient philosophers
              promoted quite progressive ideas. For instance, as early as in the
              4th century B.C., they believed that everything in nature is made
              of atoms, which are too small to be seen. The decoded manuscripts
              will definitely make a huge impact on our vision of the past. Even
              more importantly, AI has become a powerful instrument to help
              scientists solve old and new mysteries.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: True, False or Not Stated?">
        <p className="text-gray-700 mb-4">
          Прочитайте утверждения и определите, соответствуют ли они содержанию
          текста (True), не соответствуют (False) или об этом в тексте не
          сказано (Not stated).
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              13. <i>The Vesuvius Challenge</i> team was created for
              archaeological digging in Italy.
            </p>
            <input
              type="text"
              value={answers.q13 || ""}
              onChange={(e) => handleChange("q13", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              14. It was Julius Caesar's father-in-law who started the library
              of papyrus manuscripts.
            </p>
            <input
              type="text"
              value={answers.q14 || ""}
              onChange={(e) => handleChange("q14", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              15. The manuscripts survived underground due to the absence of
              bacteria.
            </p>
            <input
              type="text"
              value={answers.q15 || ""}
              onChange={(e) => handleChange("q15", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              16. Until the 21st century, lots of the scrolls were kept unread.
            </p>
            <input
              type="text"
              value={answers.q16 || ""}
              onChange={(e) => handleChange("q16", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              17. <i>The Vesuvius Challenge</i> project is still in progress.
            </p>
            <input
              type="text"
              value={answers.q17 || ""}
              onChange={(e) => handleChange("q17", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              18. Professor Seales has worked on <i>The Vesuvius Challenge</i>{" "}
              alone.
            </p>
            <input
              type="text"
              value={answers.q18 || ""}
              onChange={(e) => handleChange("q18", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              19. Some of the decoded manuscripts contained drawings of atoms.
            </p>
            <input
              type="text"
              value={answers.q19 || ""}
              onChange={(e) => handleChange("q19", e.target.value)}
              placeholder="True, False or Not stated?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 2: Discussion Questions">
        <p className="text-gray-700 mb-4">
          Обсудите или напишите ответы на эти вопросы:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              1. How has AI helped in reading the ancient manuscripts?
            </p>
            <textarea
              value={answers.discuss1 || ""}
              onChange={(e) => handleChange("discuss1", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              2. Why is this discovery important for understanding ancient
              history?
            </p>
            <textarea
              value={answers.discuss2 || ""}
              onChange={(e) => handleChange("discuss2", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              3. What other ways can AI help scientists in their research?
            </p>
            <textarea
              value={answers.discuss3 || ""}
              onChange={(e) => handleChange("discuss3", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              4. Do you think technology will help us solve more mysteries in
              the future? Give examples.
            </p>
            <textarea
              value={answers.discuss4 || ""}
              onChange={(e) => handleChange("discuss4", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Congratulations!
          </h3>
          <p className="text-gray-700 mb-4">
            Вы завершили тему <b>Technology and Gadgets</b>! Теперь вы можете
            уверенно говорить о технологиях, гаджетах, интернете и даже об
            искусственном интеллекте на английском языке. Вы прочитали сложный
            текст о том, как AI помогает расшифровывать древние рукописи!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold">
            <span>✓</span>
            <span>Тема завершена</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
