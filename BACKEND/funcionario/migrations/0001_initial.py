# Generated by Django 4.2.6 on 2023-10-05 04:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('escala', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Funcionario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=255)),
                ('pontuacao', models.IntegerField()),
                ('Funcao', models.CharField(max_length=255)),
                ('escala', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='escalas', to='escala.escala')),
            ],
        ),
    ]
