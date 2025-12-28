
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:convert';
import 'dart:async';
import 'package:audioplayers/audioplayers.dart';

void main() {
  runApp(const AnniversaryApp());
}

class AnniversaryApp extends StatelessWidget {
  const AnniversaryApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '6 Tháng Bên Nhau',
      theme: ThemeData(
        primarySwatch: Colors.pink,
        fontFamily: 'Roboto',
      ),
      debugShowCheckedModeBanner: false,
      home: const WishInputScreen(),
    );
  }
}

class WishInputScreen extends StatefulWidget {
  const WishInputScreen({super.key});

  @override
  State<WishInputScreen> createState() => _WishInputScreenState();
}

class _WishInputScreenState extends State<WishInputScreen>
    with SingleTickerProviderStateMixin {
  final TextEditingController _wishController = TextEditingController();
  late AnimationController _animationController;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3),
    )..repeat();
  }

  @override
  void dispose() {
    _wishController.dispose();
    _animationController.dispose();
    super.dispose();
  }

  void _submitWish() {
    if (_wishController.text.trim().isNotEmpty) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => MainSlideScreen(wish: _wishController.text),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color(0xFF581C87),
              Color(0xFFBE185D),
              Color(0xFFBE123C),
            ],
          ),
        ),
        child: Stack(
          children: [
            ...List.generate(20, (index) {
              return AnimatedBuilder(
                animation: _animationController,
                builder: (context, child) {
                  return Positioned(
                    left: (index * 73) % MediaQuery.of(context).size.width,
                    top: (index * 97 + _animationController.value * 50) %
                        MediaQuery.of(context).size.height,
                    child: Opacity(
                      opacity: 0.2,
                      child: Icon(
                        Icons.favorite,
                        color: Colors.pink.shade200,
                        size: 30 + (index % 3) * 15,
                      ),
                    ),
                  );
                },
              );
            }),
            Center(
              child: SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Container(
                    constraints: const BoxConstraints(maxWidth: 600),
                    padding: const EdgeInsets.all(48),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(32),
                      border: Border.all(
                        color: Colors.white.withOpacity(0.2),
                        width: 1,
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.3),
                          blurRadius: 30,
                          spreadRadius: 5,
                        ),
                      ],
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Icon(
                          Icons.auto_fix_high,
                          size: 80,
                          color: Color(0xFFFDE047),
                        ),
                        const SizedBox(height: 24),
                        const Text(
                          '✨ Hãy Nhập Điều Ước ✨',
                          style: TextStyle(
                            fontSize: 40,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 16),
                        const Text(
                          'Gửi một điều ước thật đặc biệt cho Đỗ Minh Hằng',
                          style: TextStyle(
                            fontSize: 20,
                            color: Color(0xFFFBCFE8),
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 32),
                        TextField(
                          controller: _wishController,
                          maxLines: 4,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 18,
                          ),
                          decoration: InputDecoration(
                            hintText: 'Nhập điều ước của bạn vào đây...',
                            hintStyle: TextStyle(
                              color: Colors.pink.shade200,
                            ),
                            filled: true,
                            fillColor: Colors.white.withOpacity(0.2),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(16),
                              borderSide: BorderSide(
                                color: Colors.pink.shade300,
                                width: 2,
                              ),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(16),
                              borderSide: BorderSide(
                                color: Colors.pink.shade300,
                                width: 2,
                              ),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(16),
                              borderSide: const BorderSide(
                                color: Color(0xFFF472B6),
                                width: 2,
                              ),
                            ),
                          ),
                          onSubmitted: (_) => _submitWish(),
                        ),
                        const SizedBox(height: 24),
                        ElevatedButton(
                          onPressed: _submitWish,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFFEC4899),
                            padding: const EdgeInsets.symmetric(
                              horizontal: 48,
                              vertical: 20,
                            ),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(50),
                            ),
                            elevation: 8,
                          ),
                          child: const Text(
                            '💫 Gửi Điều Ước 💫',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MainSlideScreen extends StatefulWidget {
  final String wish;
  const MainSlideScreen({super.key, required this.wish});

  @override
  State<MainSlideScreen> createState() => _MainSlideScreenState();
}

class _MainSlideScreenState extends State<MainSlideScreen>
    with TickerProviderStateMixin {
  int _currentSlide = 0;
  List<SlideData> _slides = [];
  Map<String, String> _captions = {};
  Timer? _autoPlayTimer;
  late AnimationController _slideAnimationController;
  late Animation<double> _fadeAnimation;
  late Animation<Offset> _slideAnimation;
  int _currentAnimationType = 0;

  // Audio player
  final AudioPlayer _audioPlayer = AudioPlayer();
  bool _isMusicPlaying = false;

  @override
  void initState() {
    super.initState();
    _slideAnimationController = AnimationController(
      duration: const Duration(milliseconds: 1000),
      vsync: this,
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(
        parent: _slideAnimationController,
        curve: Curves.easeInOut,
      ),
    );

    _slideAnimation = Tween<Offset>(
      begin: const Offset(1.0, 0.0),
      end: Offset.zero,
    ).animate(
      CurvedAnimation(
        parent: _slideAnimationController,
        curve: Curves.easeOut,
      ),
    );

    _loadAssets();
    _playMusic();
  }

  Future<void> _playMusic() async {
    try {
      await _audioPlayer.play(AssetSource('music.mp3'));
      await _audioPlayer.setReleaseMode(ReleaseMode.loop);
      setState(() {
        _isMusicPlaying = true;
      });
    } catch (e) {
      print('Không thể phát nhạc: $e');
    }
  }

  void _toggleMusic() {
    if (_isMusicPlaying) {
      _audioPlayer.pause();
    } else {
      _audioPlayer.resume();
    }
    setState(() {
      _isMusicPlaying = !_isMusicPlaying;
    });
  }

  Future<void> _loadAssets() async {
    final captionsJson = await rootBundle.loadString('assets/captions.json');
    _captions = Map<String, String>.from(json.decode(captionsJson));

    final manifestJson = await rootBundle.loadString('AssetManifest.json');
    final Map<String, dynamic> manifest = json.decode(manifestJson);

    final imagePaths = manifest.keys
        .where((key) => key.startsWith('assets/images/') &&
        (key.endsWith('.jpg') ||
            key.endsWith('.jpeg') ||
            key.endsWith('.png') ||
            key.endsWith('.webp')))
        .toList()
      ..sort((a, b) {
        // Lấy tên file không có đường dẫn
        final fileNameA = a.split('/').last;
        final fileNameB = b.split('/').last;

        // Tách số từ tên file (ví dụ: photo1.jpg -> 1)
        final numA = int.tryParse(fileNameA.replaceAll(RegExp(r'[^0-9]'), '')) ?? 0;
        final numB = int.tryParse(fileNameB.replaceAll(RegExp(r'[^0-9]'), '')) ?? 0;

        return numA.compareTo(numB);
      });

    _slides = [
      SlideData(
        title: "6 Tháng Bên Nhau",
        subtitle: "Cùng Đỗ Minh Hằng",
        message: widget.wish,
        gradient: const [Color(0xFFEC4899), Color(0xFFF43F5E)],
        type: SlideType.intro,
      ),
    ];

    for (int i = 0; i < imagePaths.length; i++) {
      final fileName = imagePaths[i].split('/').last;
      final caption = _captions[fileName] ?? 'Kỷ niệm ${i + 1}';

      _slides.add(SlideData(
        title: "Những Kỷ Niệm Đẹp",
        subtitle: caption,
        message: "",
        gradient: _getGradientForIndex(i),
        type: SlideType.image,
        imagePath: imagePaths[i],
      ));
    }

    _slides.add(SlideData(
      title: "Lời Nhắn Cuối",
      subtitle: "Dành tặng Đỗ Minh Hằng",
      message: "Cảm ơn em đã đến bên anh. Hẹn những ngày tháng tiếp theo sẽ còn nhiều kỷ niệm đẹp hơn nữa! 💕",
      gradient: const [Color(0xFFEF4444), Color(0xFFEC4899)],
      type: SlideType.outro,
    ));

    setState(() {});
    _slideAnimationController.forward();
    _startAutoPlay();
  }

  List<Color> _getGradientForIndex(int index) {
    final gradients = [
      [const Color(0xFFA855F7), const Color(0xFFEC4899)],
      [const Color(0xFF3B82F6), const Color(0xFFA855F7)],
      [const Color(0xFFF43F5E), const Color(0xFFEC4899)],
      [const Color(0xFF6366F1), const Color(0xFFA855F7)],
      [const Color(0xFFF472B6), const Color(0xFFF43F5E)],
      [const Color(0xFF8B5CF6), const Color(0xFFEC4899)],
    ];
    return gradients[index % gradients.length];
  }

  void _startAutoPlay() {
    _autoPlayTimer?.cancel();
    _autoPlayTimer = Timer.periodic(const Duration(seconds: 5), (timer) {
      _nextSlide();
    });
  }

  void _nextSlide() {
    if (_slides.isEmpty) return;
    _slideAnimationController.reverse().then((_) {
      setState(() {
        _currentSlide = (_currentSlide + 1) % _slides.length;
        _currentAnimationType = (_currentAnimationType + 1) % 5;
      });
      _updateAnimation();
      _slideAnimationController.forward();
    });
  }

  void _goToSlide(int index) {
    if (index == _currentSlide || _slides.isEmpty) return;
    _slideAnimationController.reverse().then((_) {
      setState(() {
        _currentSlide = index;
        _currentAnimationType = (_currentAnimationType + 1) % 5;
      });
      _updateAnimation();
      _slideAnimationController.forward();
    });
  }

  void _updateAnimation() {
    switch (_currentAnimationType) {
      case 0:
        _slideAnimation = Tween<Offset>(begin: Offset.zero, end: Offset.zero).animate(_slideAnimationController);
        break;
      case 1:
        _slideAnimation = Tween<Offset>(begin: const Offset(1.0, 0.0), end: Offset.zero).animate(_slideAnimationController);
        break;
      case 2:
        _slideAnimation = Tween<Offset>(begin: const Offset(-1.0, 0.0), end: Offset.zero).animate(_slideAnimationController);
        break;
      case 3:
        _slideAnimation = Tween<Offset>(begin: const Offset(0.0, -1.0), end: Offset.zero).animate(_slideAnimationController);
        break;
      case 4:
        _slideAnimation = Tween<Offset>(begin: const Offset(0.0, 1.0), end: Offset.zero).animate(_slideAnimationController);
        break;
    }
  }

  @override
  void dispose() {
    _autoPlayTimer?.cancel();
    _slideAnimationController.dispose();
    _audioPlayer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_slides.isEmpty) {
      return const Scaffold(
        body: Center(
          child: CircularProgressIndicator(color: Colors.pink),
        ),
      );
    }

    final currentSlideData = _slides[_currentSlide];

    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF111827), Color(0xFF581C87), Color(0xFF111827)],
          ),
        ),
        child: Stack(
          children: [
            ...List.generate(15, (index) {
              return Positioned(
                left: (index * 97) % MediaQuery.of(context).size.width,
                top: (index * 73) % MediaQuery.of(context).size.height,
                child: const Icon(Icons.favorite, color: Color(0x33EC4899), size: 40),
              );
            }),
            SafeArea(
              child: Column(
                children: [
                  // Nút điều khiển nhạc
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        FloatingActionButton(
                          onPressed: _toggleMusic,
                          backgroundColor: const Color(0xFFEC4899),
                          mini: true,
                          child: Icon(
                            _isMusicPlaying ? Icons.music_note : Icons.music_off,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(16.0),
                        child: Container(
                          constraints: const BoxConstraints(maxWidth: 900),
                          child: FadeTransition(
                            opacity: _fadeAnimation,
                            child: SlideTransition(
                              position: _slideAnimation,
                              child: Container(
                                decoration: BoxDecoration(
                                  gradient: LinearGradient(
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                    colors: currentSlideData.gradient,
                                  ),
                                  borderRadius: BorderRadius.circular(32),
                                  boxShadow: [
                                    BoxShadow(
                                      color: Colors.black.withOpacity(0.3),
                                      blurRadius: 30,
                                      spreadRadius: 5,
                                    ),
                                  ],
                                ),
                                padding: const EdgeInsets.all(48),
                                child: SingleChildScrollView(
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Icon(
                                        currentSlideData.type == SlideType.intro
                                            ? Icons.calendar_today
                                            : currentSlideData.type == SlideType.outro
                                            ? Icons.favorite
                                            : Icons.auto_awesome,
                                        size: 64,
                                        color: Colors.white,
                                      ),
                                      const SizedBox(height: 24),
                                      Text(
                                        currentSlideData.title,
                                        style: const TextStyle(
                                          fontSize: 48,
                                          fontWeight: FontWeight.bold,
                                          color: Colors.white,
                                        ),
                                        textAlign: TextAlign.center,
                                      ),
                                      const SizedBox(height: 16),
                                      Text(
                                        currentSlideData.subtitle,
                                        style: const TextStyle(
                                          fontSize: 28,
                                          fontWeight: FontWeight.w600,
                                          color: Colors.white,
                                        ),
                                        textAlign: TextAlign.center,
                                      ),
                                      if (currentSlideData.type == SlideType.image && currentSlideData.imagePath != null)
                                        Padding(
                                          padding: const EdgeInsets.symmetric(vertical: 32),
                                          child: ClipRRect(
                                            borderRadius: BorderRadius.circular(16),
                                            child: Image.asset(
                                              currentSlideData.imagePath!,
                                              height: 320,
                                              fit: BoxFit.cover,
                                            ),
                                          ),
                                        ),
                                      if (currentSlideData.message.isNotEmpty)
                                        Padding(
                                          padding: const EdgeInsets.only(top: 24),
                                          child: Text(
                                            currentSlideData.message,
                                            style: const TextStyle(
                                              fontSize: 20,
                                              color: Colors.white,
                                              height: 1.6,
                                            ),
                                            textAlign: TextAlign.center,
                                          ),
                                        ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(_slides.length, (index) {
                        return GestureDetector(
                          onTap: () => _goToSlide(index),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 300),
                            margin: const EdgeInsets.symmetric(horizontal: 4),
                            width: _currentSlide == index ? 48 : 12,
                            height: 12,
                            decoration: BoxDecoration(
                              color: _currentSlide == index
                                  ? const Color(0xFFEC4899)
                                  : Colors.white.withOpacity(0.5),
                              borderRadius: BorderRadius.circular(6),
                            ),
                          ),
                        );
                      }),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                    child: Container(
                      constraints: const BoxConstraints(maxWidth: 450),
                      height: 4,
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.2),
                        borderRadius: BorderRadius.circular(2),
                      ),
                      child: FractionallySizedBox(
                        alignment: Alignment.centerLeft,
                        widthFactor: (_currentSlide + 1) / _slides.length,
                        child: Container(
                          decoration: BoxDecoration(
                            color: const Color(0xFFEC4899),
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 16.0),
                    child: Text(
                      '${_slides.length - 2} ảnh kỷ niệm 💕',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.7),
                        fontSize: 14,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

enum SlideType { intro, image, outro }

class SlideData {
  final String title;
  final String subtitle;
  final String message;
  final List<Color> gradient;
  final SlideType type;
  final String? imagePath;

  SlideData({
    required this.title,
    required this.subtitle,
    required this.message,
    required this.gradient,
    required this.type,
    this.imagePath,
  });
}
