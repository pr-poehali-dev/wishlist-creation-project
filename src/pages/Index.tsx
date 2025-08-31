import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Gift {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  isReserved: boolean;
  reservedBy?: string;
}

const Index = () => {
  const [gifts, setGifts] = useState<Gift[]>([
    {
      id: '1',
      title: 'Уютный плед',
      description: 'Мягкий шерстяной плед для холодных вечеров',
      price: '3 500 ₽',
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      isReserved: false
    },
    {
      id: '2', 
      title: 'Керамическая кружка',
      description: 'Handmade кружка с теплым дизайном',
      price: '1 200 ₽',
      imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop',
      isReserved: true,
      reservedBy: 'Мама'
    },
    {
      id: '3',
      title: 'Ароматические свечи',
      description: 'Набор свечей с запахом ванили и корицы',
      price: '2 100 ₽',
      imageUrl: 'https://images.unsplash.com/photo-1602874801007-641c0a7c7d2d?w=400&h=300&fit=crop',
      isReserved: false
    },
    {
      id: '4',
      title: 'Книга рецептов',
      description: 'Семейные рецепты для уютных ужинов',
      price: '1 800 ₽',
      imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      isReserved: false
    }
  ]);

  const [selectedTab, setSelectedTab] = useState('wishlist');

  const handleReserveGift = (giftId: string, guestName: string) => {
    setGifts(prev => prev.map(gift => 
      gift.id === giftId 
        ? { ...gift, isReserved: true, reservedBy: guestName }
        : gift
    ));
  };

  const handleUnreserveGift = (giftId: string) => {
    setGifts(prev => prev.map(gift => 
      gift.id === giftId 
        ? { ...gift, isReserved: false, reservedBy: undefined }
        : gift
    ));
  };

  const reservedGifts = gifts.filter(gift => gift.isReserved);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
            <Icon name="Gift" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Мой День Рождения 🎉
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Добро пожаловать в мой вишлист! Здесь собраны подарки, которые принесут мне радость. 
            Вы можете забронировать любой из них одним кликом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Heart" size={20} className="mr-2" />
              Посмотреть вишлист
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться со мной
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="home">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              <Icon name="Gift" size={16} className="mr-2" />
              Вишлист
            </TabsTrigger>
            <TabsTrigger value="reserved">
              <Icon name="CheckCircle" size={16} className="mr-2" />
              Забронированное
            </TabsTrigger>
            <TabsTrigger value="contacts">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Контакты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="text-center py-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Добро пожаловать!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Этот сайт создан специально для моего дня рождения. Здесь вы найдете список подарков, 
                которые мне хотелось бы получить, и сможете забронировать любой из них.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Gift" size={32} className="mx-auto mb-2 text-primary" />
                    <CardTitle>Выберите подарок</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Просмотрите список желаемых подарков
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Icon name="MousePointer" size={32} className="mx-auto mb-2 text-primary" />
                    <CardTitle>Забронируйте</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Нажмите кнопку "Забронировать" на понравившемся подарке
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Heart" size={32} className="mx-auto mb-2 text-primary" />
                    <CardTitle>Радуйте меня</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Подарок будет отмечен как забронированный
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>



          <TabsContent value="wishlist">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gifts.map(gift => (
                <Card key={gift.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={gift.imageUrl} 
                      alt={gift.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{gift.title}</CardTitle>
                      <Badge variant={gift.isReserved ? "destructive" : "default"}>
                        {gift.price}
                      </Badge>
                    </div>
                    <CardDescription>{gift.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {gift.isReserved ? (
                      <div className="space-y-2">
                        <Badge variant="secondary" className="w-full justify-center py-2">
                          <Icon name="Check" size={16} className="mr-2" />
                          Забронировано: {gift.reservedBy}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleUnreserveGift(gift.id)}
                          className="w-full"
                        >
                          Отменить бронь
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        onClick={() => {
                          const guestName = prompt('Как вас зовут?');
                          if (guestName) {
                            handleReserveGift(gift.id, guestName);
                          }
                        }}
                        className="w-full"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Забронировать
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reserved">
            {reservedGifts.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Забронированные подарки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reservedGifts.map(gift => (
                    <Card key={gift.id}>
                      <CardContent className="flex items-center space-x-4 pt-6">
                        <img 
                          src={gift.imageUrl} 
                          alt={gift.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{gift.title}</h3>
                          <p className="text-sm text-muted-foreground">{gift.price}</p>
                          <Badge variant="secondary" className="mt-1">
                            Забронировано: {gift.reservedBy}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Пока нет забронированных подарков</h2>
                <p className="text-muted-foreground">Первые бронирования появятся здесь</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="contacts" className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  Связаться со мной
                </CardTitle>
                <CardDescription>
                  Есть вопросы или хотите обсудить подарок? Напишите мне!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="flex items-center space-x-3 pt-6">
                      <Icon name="MessageSquare" size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Телеграм</p>
                        <p className="text-sm text-muted-foreground">@username</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-center space-x-3 pt-6">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-sm text-muted-foreground">+7 (xxx) xxx-xx-xx</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <Icon name="Calendar" size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">День рождения</h3>
                  <p className="text-muted-foreground">15 сентября 2024</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;