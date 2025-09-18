import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: "Кибербезопасность",
      description: "Правовая поддержка в области защиты информации, персональных данных и цифровой безопасности",
      icon: "Shield",
      topics: ["GDPR", "152-ФЗ", "Утечки данных", "Киберпреступления"]
    },
    {
      title: "IT-контракты",
      description: "Разработка и экспертиза договоров на разработку ПО, лицензирование и техподдержку",
      icon: "FileText",
      topics: ["SaaS", "Лицензии", "Разработка", "Поддержка"]
    },
    {
      title: "Интеллектуальная собственность",
      description: "Защита авторских прав на программное обеспечение, товарные знаки в digital-сфере",
      icon: "Lightbulb",
      topics: ["Авторское право", "Патенты", "Товарные знаки", "Доменные споры"]
    },
    {
      title: "Регулирование ИИ",
      description: "Консультации по применению искусственного интеллекта в соответствии с российским и международным правом",
      icon: "Brain",
      topics: ["Алгоритмы", "Машинное обучение", "Этика ИИ", "Ответственность"]
    },
    {
      title: "E-commerce",
      description: "Правовое сопровождение интернет-торговли, маркетплейсов и цифровых платформ",
      icon: "ShoppingCart",
      topics: ["Маркетплейсы", "Оплата", "Логистика", "Возвраты"]
    },
    {
      title: "Блокчейн и криптовалюты",
      description: "Юридическая поддержка проектов на блокчейне, токенизация и цифровые активы",
      icon: "Link",
      topics: ["Smart-контракты", "Токены", "DeFi", "NFT"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Здесь будет логика отправки формы
    alert('Спасибо за обращение! Свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Scale" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">Digital Law Attorney</h1>
              <p className="text-xs text-muted">Цифровое право и технологии</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#practice" className="text-secondary hover:text-primary transition-colors">Практика</a>
            <a href="#consultation" className="text-secondary hover:text-primary transition-colors">Консультации</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Консультация</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent to-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Специалист по цифровому праву
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Правовая защита в&nbsp;цифровую эпоху
          </h1>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональная юридическая помощь в области IT-права, кибербезопасности, 
            защиты персональных данных и регулирования искусственного интеллекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Изучить практику
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Услуги
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Специализации в цифровом праве
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Комплексная правовая поддержка технологических компаний и IT-проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon name={service.icon as any} size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Решенных дел</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/80">Успешных исходов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-white/80">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-white/80">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-20 bg-accent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Консультация
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Получить профессиональную консультацию
            </h2>
            <p className="text-lg text-muted">
              Опишите вашу ситуацию, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Имя *
                    </label>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (000) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Описание ситуации *
                  </label>
                  <Textarea
                    placeholder="Опишите вашу правовую ситуацию, вопросы или задачи..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Scale" size={32} className="text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Digital Law Attorney</h3>
                  <p className="text-white/80 text-sm">Цифровое право и технологии</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Профессиональная юридическая помощь в области IT-права, 
                кибербезопасности и цифровых технологий.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Кибербезопасность</li>
                <li>IT-контракты</li>
                <li>Интеллектуальная собственность</li>
                <li>Регулирование ИИ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@digitallaw.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 000-00-00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Центр</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 Digital Law Attorney. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;