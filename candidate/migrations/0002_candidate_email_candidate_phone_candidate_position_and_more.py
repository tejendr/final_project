# Generated by Django 5.0.3 on 2024-04-27 01:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('candidate', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='email',
            field=models.EmailField(default='NAN', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='phone',
            field=models.IntegerField(default='0000000'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='candidate',
            name='position',
            field=models.CharField(default='22', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='candidate',
            name='profile_picture',
            field=models.ImageField(upload_to='static/images'),
        ),
        migrations.AlterField(
            model_name='candidate',
            name='score',
            field=models.IntegerField(default=-1),
        ),
    ]